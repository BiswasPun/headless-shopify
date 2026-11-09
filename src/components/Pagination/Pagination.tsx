"use client";

import React from "react";

interface PaginationProps {
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onPageChange: (page: number) => void;
}

const navButtonClass =
  "inline-flex items-center gap-1 h-10 px-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md transition-colors cursor-pointer hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:text-gray-300 disabled:border-gray-200 disabled:bg-white disabled:cursor-not-allowed";

export const Pagination = ({
  currentPage,
  hasNextPage,
  hasPreviousPage,
  onPageChange,
}: PaginationProps) => {
  return (
    <nav
      aria-label="Pagination"
      className="flex justify-center items-center gap-2 mt-12"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPreviousPage}
        aria-label="Previous page"
        className={navButtonClass}
      >
        <span aria-hidden="true">&lsaquo;</span>
        Prev
      </button>

      <span
        aria-current="page"
        className="inline-flex items-center justify-center h-10 min-w-10 px-3 text-sm font-semibold text-white bg-gray-900 border border-gray-900 rounded-md"
      >
        {currentPage}
      </span>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNextPage}
        aria-label="Next page"
        className={navButtonClass}
      >
        Next
        <span aria-hidden="true">&rsaquo;</span>
      </button>
    </nav>
  );
};
