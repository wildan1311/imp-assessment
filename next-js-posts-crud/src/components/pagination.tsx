"use client";

interface LinkItem {
  url: string | null;
  label: string;
  active: boolean;
}

interface PaginationProps {
  links: LinkItem[];
  onPageChange: (number:number) => void; // handler ketika tombol ditekan
}

export default function Pagination({ links, onPageChange }: PaginationProps) {
  return (
    <div className="join mt-4">
      {links.map((link, index) => {
        const labelText = link.label
          .replace("&laquo;", "«")
          .replace("&raquo;", "»")
          .replace(/<\/?[^>]+(>|$)/g, ""); // remove any HTML

        return (
          <button
            title="Click to change page"
            key={index}
            className={`join-item btn btn-sm ${
              link.active ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => link.url && onPageChange(parseInt(labelText))}
            disabled={!link.url}
            dangerouslySetInnerHTML={{ __html: labelText }}
          />
        );
      })}
    </div>
  );
}
