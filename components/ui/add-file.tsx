import { ImgPlus } from "@/public/logos/svgs";
import React from "react";
import { DragEvent, FormEvent, useEffect, useRef, useState } from "react";
import "@/app/CustomDragDrop.css";

interface AddFileProps {
  updateFileUpload: (file: File) => void;
  removeFile?: boolean;
}

export const AddFile = ({ updateFileUpload, removeFile }: AddFileProps) => {
  // file input ref
  const FileInput = useRef(
    null
  ) as unknown as React.MutableRefObject<HTMLInputElement>;

  // drag state
  const [dragActive, setDragActive] = useState(false);

  // handle drag events
  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragover" || e.type === "dragenter") {
      setDragActive(true);
    } else if (e.type === "dragleave" || e.type === "drop") {
      setDragActive(false);
    }
  };

  // handle drop event
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      updateFileUpload(e.dataTransfer.files[0]);
      setDragActive(false);
    }
  };

  // handle change event
  const handleChange = (
    e: FormEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files && e.target.files.length > 0) {
      updateFileUpload(e.target.files[0]);
    }
  };

  // remove file
  useEffect(() => {
    if (removeFile) {
      FileInput.current.value = "";
    }
  }, [removeFile]);

  return (
    <div onDragEnter={handleDrag} className="custom-drag-drop form-control">
      <input
        ref={FileInput}
        type="file"
        name="file"
        id="file"
        onChange={handleChange}
        accept="image/jpeg, image/jpg, image/png"
      />
      <label
        className={`drag-drop-container block ${dragActive ? "active" : ""}`}
      >
        <div className="drag-drop-content">
          <div className="img-cont">
            <ImgPlus className="text-5xl cursor-pointer img !h-fit" />
          </div>
          <div className="drag-drop-text">
            <p className="font-bold text-purple">
              Нажмите, чтобы загрузить изображение, или просто перетащите его
              сюда!
            </p>
            <span>PNG, JPEG</span>
          </div>
        </div>
      </label>
      {dragActive && (
        <div
          className="drag-file-overlay"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </div>
  );
};
