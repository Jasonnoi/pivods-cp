import { FolderX } from "lucide-react";

function EmptyData() {
    return (
        <div className="bg-background flex flex-col items-center justify-center py-32 text-center">
            <FolderX />
            <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
                No results found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md">
                Try adjusting your search or filters to find what you are looking for.
            </p>
        </div>
    );
}

export default EmptyData;
