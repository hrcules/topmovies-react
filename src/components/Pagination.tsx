import { ChevronLeft, ChevronRight } from "lucide-react";

import { useMovies } from "../hooks/useMovies";
import {
  PaginationContainer,
  PaginationIcon,
  PaginationItem,
} from "../styles/components/Pagination.style";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ page, setPage }: PaginationProps) {
  const { totalPages } = useMovies();

  const renderPageNumbers = () => {
    const pagesToShow = 3; // Quantidade de números de página a serem mostrados antes de exibir "..."
    const pageNumbers = [];

    if (totalPages <= pagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, page - Math.floor(pagesToShow / 2));
      const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push("..."); // Adiciona "..." se houver mais de duas páginas após a página atual
        }
      }
    }

    return pageNumbers.map((number) => (
      <PaginationItem
        key={number}
        style={{
          borderColor: number === page ? "#E07B67" : "#261A17",
          color: number === page ? "" : "#AFABB6",
        }}
      >
        {number}
      </PaginationItem>
    ));
  };

  return (
    <div>
      <PaginationContainer>
        <PaginationIcon
          onClick={() => {
            if (page === 1) {
              return;
            }
            setPage(page - 1);
          }}
        >
          <ChevronLeft size={18} color={page === 1 ? "#252529" : "#fbf9fe"} />
        </PaginationIcon>
        {renderPageNumbers()}
        <PaginationIcon
          onClick={() => {
            if (page === totalPages) {
              return;
            }
            setPage(page + 1);
          }}
        >
          {" "}
          <ChevronRight
            size={18}
            color={page === totalPages ? "#252529" : "#fbf9fe"}
          />{" "}
        </PaginationIcon>
      </PaginationContainer>
    </div>
  );
}

export default Pagination;
