import React from "react";

const Pagination = ({totalPages,setActivePage,activePage}) => {
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
          setActivePage(page);
        }
    };
    
    const getPageNumbers = () => {
        const pages = [];
    
        const start = Math.max(activePage - 3, 1);
        const end = Math.min(activePage + 3, totalPages);
    
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
        return pages;
    };
    
    return (
        <div className="flex items-center justify-center space-x-1 text-gray-700 mt-4">
          {/* Botão Primeira página */}
          <button
            className="px-3 py-1 rounded-md hover:bg-gray-200 disabled:opacity-50"
            onClick={() => goToPage(1)}
            disabled={activePage === 1}
          >
            &laquo;
          </button>
    
          {/* Botão Página anterior */}
          <button
            className="px-3 py-1 rounded-md hover:bg-gray-200 disabled:opacity-50"
            onClick={() => goToPage(activePage - 1)}
            disabled={activePage === 1}
          >
            &lsaquo;
          </button>
    
          {/* Números das páginas */}
          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              className={`px-3 py-1 rounded-md ${
                pageNum === activePage
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => goToPage(pageNum)}
            >
              {pageNum}
            </button>
          ))}
    
          {/* Botão Página seguinte */}
          <button
            className="px-3 py-1 rounded-md hover:bg-gray-200 disabled:opacity-50"
            onClick={() => goToPage(activePage + 1)}
            disabled={activePage === totalPages}
          >
            &rsaquo;
          </button>
    
          {/* Botão Última página */}
          <button
            className="px-3 py-1 rounded-md hover:bg-gray-200 disabled:opacity-50"
            onClick={() => goToPage(totalPages)}
            disabled={activePage === totalPages}
          >
            &raquo;
          </button>
        </div>
    );
};

export default Pagination