import { Button } from "@nextui-org/button";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <a href="/uploads" className="flex items-center space-x-2">
                Uploads
            </a>
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold">
                    Noncompete Summary Generator
                </h1>
                <p className="text-gray-500 md:w-1/3 md:mx-auto dark:text-gray-400">
                    Upload a file to generate a summary of its contents.
                </p>
            </div>
            <div className="border-dashed border-2 border-gray-200 rounded-lg w-full max-w-sm h-[200px] border-gray-300 dark:border-gray-700">
                <div className="flex h-full items-center justify-center text-gray-500 border-gray-200 border-dashed border-t-2 border-b-2 dark:text-gray-400 dark:border-gray-700">
                    <span className="mx-3">
                        Drag and drop a file here or click to upload
                    </span>
                </div>
                <input className="sr-only" type="file" />
            </div>
            <Button className="mt-10">Generate Summary</Button>
        </div>
    );
}
