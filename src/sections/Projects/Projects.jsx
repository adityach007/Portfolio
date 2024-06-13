import styles from './ProjectsStyles.module.css';
import icon1 from '../../assets/icon1.png';
import finetune from '../../assets/finetune.jpg';
import sentiment from '../../assets/sentiment (1).jpg';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={icon1}
          link="https://github.com/adityach007/InfiUse"
          h3="InfiUse"
          p="MultiModal LLM application"
          tech="LangChain Streamlit Groq"
        />
        <ProjectCard
          src={finetune}
          link="https://github.com/adityach007/Gen_AI/tree/main/Pegasus%20Fine-Tuning%20for%20Abstractive%20Text%20Summarization"
          h3="Fine Tuning for Text Summarization"
          p="Used Pegasus model on the SAMSum dataset"
          tech="HuggingFace PyTorch NLTK"
        />
        <ProjectCard
          src={sentiment}
          link="https://github.com/adityach007/Machine-Learning/tree/main/Sentiment_Analysis_of_Political_Speechs"
          h3="Sentiment Analysis"
          p="Analyzed political speech of PM Modi"
          tech="NLP BERT Gensim"
        />
      </div>
    </section>
  );
}

export default Projects;
