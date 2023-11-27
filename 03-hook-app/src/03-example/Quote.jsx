import React, { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ data }) => {
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  const pRef = useRef();

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [data]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mt-1">
          {data.name}
        </p>
        <footer className="blockquote-footer">
          Location: {data.location.name}
        </footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
