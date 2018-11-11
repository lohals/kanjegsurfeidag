import Typography from '@material-ui/core/Typography';
import * as React from 'react';

interface QuestionProps {
  location: string
}

const Question: React.SFC<QuestionProps> = (props) => {
  return (
    <>
      <Typography component="h4" variant="h4" gutterBottom={true}>
        Kan jeg surfe i {props.location} ?
      </Typography>
    </>);
};

export default Question;