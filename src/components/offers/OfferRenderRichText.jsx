import React from "react";

const OfferRenderRichText = ({ content }) => {
  const renderNode = (node) => {
    switch (node.type) {
      case "paragraph":
        return (
          <div className="text-[1.1rem] font-[300] pt-[1rem]">
            {node.children.map((child, index) => renderNode(child))}
          </div>
        );
      case "link":
        return (
          <p
            onClick={() => window.open(node.url)}
            className="w-fit cursor-pointer font-bold border-b border-borderclr"
          >
            {node.children.map((child, index) => renderNode(child))}
          </p>
        );
      case "heading":
        return (
          <div className="text-[1rem] font-bold pt-[1rem]">
            {node.children.map((child, index) => renderNode(child))}
          </div>
        );
      case "text":
        return (
          <span
            style={{
              fontStyle: node.italic ? "italic" : "normal",
              padding: "2rem 0rem",
            }}
            className={` ${node.bold ? `font-[600]` : ``}`}
          >
            {node.code ? <code>{node.text}</code> : node.text}
          </span>
        );
      case "list":
        return (
          <ul>{node.children.map((child, index) => renderNode(child))}</ul>
        );
      case "list-item":
        return (
          <>
            <li className="list-disc ml-4">
              {node.children.map((child, index) => renderNode(child))}
            </li>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      {content &&
        content?.length > 0 &&
        content[0]?.type &&
        content?.map((node, index) => renderNode(node))}
    </div>
  );
};

export default OfferRenderRichText;
