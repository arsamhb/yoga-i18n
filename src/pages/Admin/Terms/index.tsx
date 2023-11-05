import SearchInput from "../../../components/ui/SearchInput";
import { FC, useCallback, useState } from "react";
import TermItem from "./TermItem";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "src/components/ui/Loading";
import DeleteModal from "./DeleteModal";
import { IDeleteModalState, initialDeleteModalState } from "./types";
import { WithId } from "src/types/base";
import { ITerm } from "./add/types";
import Pagination from "src/components/ui/Pagination";
import { ApiTermSchema } from "../types";
import api from "src/services";
import { TERM_URL } from "../api.data";
import { apiTerm2local } from "../api.converter";

const PER_PAGE = 9;

const Terms: FC = () => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState<IDeleteModalState>(
    initialDeleteModalState
  );
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const termData = useQuery({
    queryKey: ["terms", page, search],
    queryFn: api.get<ApiTermSchema>(TERM_URL, (x) => x, {
      num: PER_PAGE,
      page,
      search,
    }),
  });

  const closeModal = useCallback(() => {
    setModalState((prevState) => ({ ...prevState, show: false }));
  }, []);

  const invokeModalWith = useCallback((term: ITerm & WithId) => {
    setModalState({
      show: true,
      term,
    });
  }, []);

  return (
    <div className={`w-full h-full p-sm flex flex-col items-center space-y-sm`}>
      <div className="w-full lg:w-3/5 flex flex-col justify-center items-center space-y-sm">
        <SearchInput
          value={search}
          setValue={(value: string) => {
            setPage(1);
            setSearch(value);
          }}
        />
        <Button
          className="btn-primary-theme"
          onClick={() => navigate("/admin/terms/add")}
        >
          + ایجاد ترم جدید
        </Button>
      </div>
      <div className="w-full lg:w-3/5 h-full flex flex-col space-y-sm py-md items-center overflow-auto">
        {termData.isLoading || termData.isError ? (
          <Loading />
        ) : termData.data.count === 0 ? (
          <p>ترمی یافت نشد</p>
        ) : (
          termData.data.values
            .map(apiTerm2local)
            .map((term) => (
              <TermItem
                title={term.title}
                level={term.level}
                id={term.id}
                description={term.description}
                range={term.range}
                invokeModal={invokeModalWith}
                key={`term-${term.id}`}
              />
            ))
        )}
      </div>
      {termData.isSuccess && (
        <Pagination
          page={page}
          perPage={PER_PAGE}
          setPage={setPage}
          totalCount={termData.data.count}
        />
      )}
      <DeleteModal
        show={modalState.show}
        term={modalState.term}
        onClose={closeModal}
      />
    </div>
  );
};

export default Terms;
