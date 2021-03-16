import styles from "../Topic/Topic.module.css";
export type TopicProps = {
  topic: string;
};

function Topic({ topic }: TopicProps) {
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topic}>{topic}</div>
    </div>
  );
}

export default Topic;
