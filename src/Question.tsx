import * as React from 'react';

interface QuestionProps {
  location: string
}

const Question: React.SFC<QuestionProps> = (props) => {
  return <div> Kan jeg surfe i <strong>{props.location}</strong>?</div>;
};

export default Question;