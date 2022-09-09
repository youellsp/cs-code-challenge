import {
    StyledTable,
    StyledTableBody,
    StyledTableHeader,
    StyledTableHeaderRow,
    StyledTh
} from "./styles";
import FileTableRow from "./FileTableRow";

const FileTable = ({ files, selectedFiles, handleFileRowClick }) => {
    return (
        <StyledTable>
            <StyledTableHeader>
                <StyledTableHeaderRow>
                    <StyledTh></StyledTh>
                    <StyledTh>Name</StyledTh>
                    <StyledTh>Device</StyledTh>
                    <StyledTh>Path</StyledTh>
                    <StyledTh></StyledTh>
                    <StyledTh>Status</StyledTh>
                </StyledTableHeaderRow>
            </StyledTableHeader>
            <StyledTableBody>
                {files.map(file => {
                    const isSelected = Boolean(selectedFiles.find(selectedFile => selectedFile.name === file.name));
                    return (
                        <FileTableRow key={file.name} file={file} isSelected={isSelected} onClick={handleFileRowClick} />
                    )
                })}
            </StyledTableBody>
        </StyledTable>
    )
}

export default FileTable;