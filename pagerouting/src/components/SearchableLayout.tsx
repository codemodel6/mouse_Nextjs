import React, { ReactNode } from "react";

// 서치바를 표현해줄 공통 컴포넌트
const SearchableLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>임시 서치바</div>
      <div>{children}</div>
    </div>
  );
};

export default SearchableLayout;
