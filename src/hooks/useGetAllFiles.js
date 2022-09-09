import { useState, useEffect } from 'react';
import mockFileApiResponse from '../constants/mockFileApiResponse';

function useGetAllFiles() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        setFiles(mockFileApiResponse);
        return () => {
            setFiles([]);
        };
    }, []);

    return files;
}

export default useGetAllFiles