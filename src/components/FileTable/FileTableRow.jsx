import Checkbox from "../Checkbox";
import {capitalizeFirstLetter} from "../../utils/format";
import {AvailableStatus, StyledTableData, StyledTableRow} from "./styles";
import {FILE_STATUS_STATES} from "../../constants/status";
import {CHECKED_STATES} from "../../constants/checkbox";

const StatusIndicator = ({ status }) => status === FILE_STATUS_STATES.Available ? <AvailableStatus /> : null;
const getCheckboxValue = (isSelected) => isSelected ? CHECKED_STATES.Checked : CHECKED_STATES.Empty;

const FileTableRow = ({ isSelected, file, onClick }) => {
    const disabled = file.status !== FILE_STATUS_STATES.Available;
    const handleRowClick = () => {
        if (disabled) {
            return;
        }
        onClick(file);
    }
    return (
        <StyledTableRow data-testid={`${file.name}-row`} disabled={disabled} onClick={() => handleRowClick()} selected={isSelected}>
            <StyledTableData>
                <Checkbox disabled={disabled} id={`${file.name}-checkbox`} onChange={() => onClick(file)} value={getCheckboxValue(isSelected)} />
            </StyledTableData>
            <StyledTableData>{file.name}</StyledTableData>
            <StyledTableData>{file.device}</StyledTableData>
            <StyledTableData>{file.path}</StyledTableData>
            <StyledTableData><StatusIndicator status={file.status} /></StyledTableData>
            <StyledTableData>{capitalizeFirstLetter(file.status)}</StyledTableData>
        </StyledTableRow>
    )
}

export default FileTableRow;