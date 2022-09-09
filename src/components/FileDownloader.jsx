import {useEffect, useMemo, useState} from "react";
import Checkbox from "./Checkbox";
import { CHECKED_STATES } from "../constants/checkbox";
import DownloadButton from "./DownloadButton";
import styled from "styled-components";
import FileTable from "./FileTable/FileTable";
import { FILE_STATUS_STATES } from "../constants/status";

const StyledFileActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: Lato, Arial, serif;
`

const FileDownloaderContainer = styled.div`
  font-family: Lato, Arial, serif;
  padding: 24px;
`;

const SelectAllWrapper = styled.span`
  width: 200px;
  justify-content: left;
  display: flex;
`;

const FileDownloader = ({ files }) => {
    const [selectAllVal, setSelectAllVal] = useState(CHECKED_STATES.Empty);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const availableFiles = useMemo(() => files.filter(file => file.status === FILE_STATUS_STATES.Available), [files]);
    const selectAllCheckboxLabel = useMemo(() => selectedFiles.length > 0 ? `Selected ${selectedFiles.length}` : 'None Selected', [selectedFiles]);

    useEffect(() => {
        let updatedSelectAllVal;
        if (selectedFiles.length === availableFiles.length) {
            updatedSelectAllVal = CHECKED_STATES.Checked;
        } else if (selectedFiles.length > 0) {
            updatedSelectAllVal = CHECKED_STATES.Indeterminate;
        } else {
            updatedSelectAllVal = CHECKED_STATES.Empty;
        }
        setSelectAllVal(updatedSelectAllVal)
    }, [selectedFiles, availableFiles]);


    const handleSelectAllClick = () => {
        if (selectedFiles.length === availableFiles.length) {
            setSelectedFiles([]);
        } else {
            setSelectedFiles(availableFiles);
        }
    };

    const handleDownloadClick = () => {
        if(selectedFiles.length) {
            const formattedFileInfo = selectedFiles.map(({device, path}) => `Device: ${device}\nPath: ${path} \n\n`).join("\n");
            window.alert(formattedFileInfo);
        } else {
            window.alert("You must select at least one file to download.");
        }
    }

    const handleFileRowClick = (file) => {
        const fileIndex = selectedFiles.findIndex(selectedFile => selectedFile.name === file.name);

        if (fileIndex === -1) {
            setSelectedFiles([...selectedFiles, file])
        } else {
            const updatedSelectedFiles = selectedFiles.filter(selectedFile => selectedFile.name !== file.name);
            setSelectedFiles(updatedSelectedFiles);
        }
    };

    return (
        <FileDownloaderContainer>
            <StyledFileActionsWrapper>
                <SelectAllWrapper>
                    <Checkbox
                        id="select-all"
                        dataTestId="select-all-checkbox"
                        label={selectAllCheckboxLabel}
                        value={selectAllVal}
                        onChange={handleSelectAllClick}
                    />
                </SelectAllWrapper>
                <DownloadButton label={"Download Selected"} onClick={handleDownloadClick} />
            </StyledFileActionsWrapper>
            <FileTable handleFileRowClick={handleFileRowClick} files={files} selectedFiles={selectedFiles} />
        </FileDownloaderContainer>


    );
}

export default FileDownloader;