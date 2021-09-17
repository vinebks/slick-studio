import { ContentContainer } from "../Content/styles";
import { Box } from "./Component";

export const Dashboard: React.FC = () => {
  return (
    <ContentContainer>
      <Box>
        <iframe
          width="100%"
          height="1000px"
          src="https://app.powerbi.com/view?r=eyJrIjoiMmJmMWJmYzUtZGIwOS00ZDlhLWE2ZjktMDM2MzI3M2EyZDc5IiwidCI6IjExZGJiZmUyLTg5YjgtNDU0OS1iZTEwLWNlYzM2NGU1OTU1MSIsImMiOjR9&pageName=ReportSection7c1dbbb383896ce702cc"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </Box>
    </ContentContainer>
  );
};
