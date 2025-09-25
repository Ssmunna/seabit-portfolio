import { useState, useEffect, useMemo } from "react";

export default function FileUploader({ label = "Drag and drop a file here or click", type = "image", preview = null, onFileSelected }) {
    const [previewUrl, setPreviewUrl] = useState(null);

    // Update preview if prop changes
    useEffect(() => {
        if (preview) setPreviewUrl(preview);
    }, [preview]);

    // Accept types based on uploader type
    const acceptTypes = useMemo(() => (type === "video" ? "video/*" : "image/*"), [type]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            if (onFileSelected) onFileSelected(file);
        }
    };

    return (
        <label className="relative w-full h-[200px] border border-gray-300 flex flex-col justify-center items-center cursor-pointer overflow-hidden bg-white">
            {/* Hidden file input */}
            <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept={acceptTypes}
            />

            {/* Image Preview */}
            {previewUrl && type === "image" && (
                <img
                    src={previewUrl}
                    alt="Preview"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}

            {/* Video Preview */}
            {previewUrl && type === "video" && (
                <video
                    src={previewUrl}
                    autoPlay
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}

            {/* Animated overlay (only show if no preview) */}
            {!previewUrl && (
                <div className="absolute inset-0 striped-bg opacity-0 hover:opacity-100 pointer-events-none"></div>
            )}

            {/* Upload Icon */}
            {!previewUrl && (
                <svg
                    className="text-gray-400 mb-2 z-10"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M12 16q.425 0 .713-.288T13 15v-3.2l.9.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-2.6-2.6q-.3-.3-.7-.3t-.7.3l-2.6 2.6q-.275.275-.275.7t.275.7t.7.275t.7-.275l.9-.9V15q0 .425.288.713T12 16m-8 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"
                    />
                </svg>
            )}

            {/* Text */}
            {!previewUrl && <p className="text-gray-500 text-sm z-10">{label}</p>}
        </label>
    );
}
