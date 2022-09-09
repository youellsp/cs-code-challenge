import downloadIconSrc from '../assets/icons/download.png'
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  font-family: Lato,Arial,serif;
`;

const StyledImage = styled.img`
  width: 16px;
  margin-right: 8px;
`;
const DownloadButton = ({ label, onClick }) => {

    return (
        <StyledButton id="download-btn" onClick={onClick} >
            <StyledImage src={downloadIconSrc} alt="download selected files icon"></StyledImage>
            {label}
        </StyledButton>
    );
};

export default DownloadButton;