"use client";

import { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";

interface QuillEditorProps {
  name?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function QuillEditor({
  name = "content",
  defaultValue = "",
  onChange
}: QuillEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      import("quill").then((QuillModule) => {
        const Quill = QuillModule.default;

        const quill = new Quill(editorRef.current!, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["link", "image"],
              ["clean"],
            ],
          },
        });

        // Set default content if available
        if (defaultValue) {
          quill.root.innerHTML = defaultValue;
          inputRef.current!.value = defaultValue;
        }

        // Sync content ke hidden input setiap perubahan
        quill.on("text-change", () => {
          if (inputRef.current) {
            inputRef.current.value = quill.root.innerHTML;
            onChange?.(quill.root.innerHTML);
          }
        });
      });
    }
  }, []);

  return (
    <div className="space-y-2">
      <div ref={editorRef} className="h-64 border p-2" />
      <input type="hidden" name={name} ref={inputRef}/>
    </div>
  );
}
