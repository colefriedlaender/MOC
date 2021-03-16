import "./Topic.module.css";
export type TopicProps = {
  topic: string;
};

function Topic({ topic }: TopicProps) {
  return (
    <div className="topicContainer">
      <div className="topic">{topic}</div>
    </div>
  );
}

export default Topic;
