import useGetAllFiles from "../hooks/useGetAllFiles";
import FileDownloader from "./FileDownloader";
import styled from "styled-components";

const StyledFileUtilitySection = styled.div`
  padding: 48px;
`;

const FileUtilitySection = () => {
    const files = useGetAllFiles();

    return (
        <StyledFileUtilitySection>
            <FileDownloader files={files} />
        </StyledFileUtilitySection>
    )
}

export default FileUtilitySection;