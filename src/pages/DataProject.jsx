import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Hero, Divider, Button } from "react-daisyui";
import { Link } from "react-router-dom";

export default function DataProject() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setShowComponent(true); // Mengatur state untuk memunculkan komponen saat halaman pertama kali dimuat
  }, []);
  return (
    <CSSTransition
      in={showComponent}
      timeout={2000}
      classNames="fade"
      unmountOnExit
    >
      <div className="pt-20">
        <Hero>
          <Hero.Content className="xs:flex xs:flex-col w-9/12 bg-opacity-60 bg-cyan-200">
            <img
              alt="Data Science"
              src="./assets/Data-Science.jpg"
              className="sm:max-w-2xl rounded-lg shadow-2xl w-96"
            />
            <div className="mx-0 px-0">
              <h1 className="text-5xl font-bold">About Data Science Project</h1>
              <p className="py-6 px-10 text-2xl">
                These data science projects consist of public opinion analysis
                projects, churn analysis projects, messy and clean
                classification, cat vs dog classification, face recognition,
                etc.
              </p>
            </div>
          </Hero.Content>
        </Hero>
        <Divider>Churn</Divider>
        <Hero className="py-10">
          <Hero.Content className="flex flex-col bg-slate-200">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">Churn Analysis Data</h1>
              <h1 className="text-xl font-semibold sm:px-48 py-10">
                Churn Analysis contains customer predictions whether to churn or
                not. All of these analyses are used to decide what steps to take
                as a decision maker.
              </h1>
              <img
                alt="Data Science Metodologi"
                src="./assets/DS-Metodologi.jpg"
                className="sm:max-w-xl self-center max-w-xs"
              />
            </div>
            <div className="self-start">
              <ul>
                <h1 className="text-start font-semibold text-2xl">
                  Business Understanding
                </h1>
                <li>
                  <h1 className="text-start text-lg">Problem statement</h1>
                  <ul className="text-start list-inside list-disc">
                    <li>
                      In 2020 - 2021 the E-commerce trend increased by 33.2%.
                    </li>
                    <li>There are 2.36 million E-commerce by 2020.</li>
                    <li>High competition among E-commerce.</li>
                    <li>Customer acquisition requires higher costs.</li>
                  </ul>
                </li>
                <li>
                  <h1 className="text-start text-lg">Business Objectives</h1>
                  <ul className="text-start list-inside list-disc">
                    <li>Prevent customer churn.</li>
                    <li>Understand customer character.</li>
                  </ul>
                </li>
                <li>
                  <h1 className="text-start text-lg">Goals</h1>
                  <ul className="text-start list-inside list-disc">
                    <li>
                      Knowing the number of churn and non churn customers.
                    </li>
                    <li>Diagnosing the cause of customer churn.</li>
                    <li>
                      Comparing the characteristics of churn and non-churn
                      customers.
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="pt-10">
                <h1 className="text-start font-semibold text-2xl">
                  Data Collecting and Understanding
                </h1>
                <li className="sm:flex sm:flex-row sm:justify-start flex flex-col gap-24">
                  <div>
                    <h1 className="text-start text-lg font-semibold">
                      Data Info:
                    </h1>
                    <img
                      alt="Data E Comm"
                      src="./assets/Data-Info.jpg"
                      className="sm:max-w-sm max-h-96 max-w-xs"
                    />
                  </div>
                  <div>
                    <h1 className="text-start text-lg font-semibold">
                      Churn Proportion:
                    </h1>
                    <img
                      alt="Proporsi Churn"
                      src="./assets/Proporsi-Churn.png"
                      className="sm:max-w-sm max-h-96 max-w-xs"
                    />
                  </div>
                </li>
                <li className="sm:flex sm:flex-row sm:justify-around flex flex-col gap-4">
                  <div>
                    <h1 className="text-start text-lg font-semibold">
                      Customer Preffered:
                    </h1>
                    <img
                      alt="E Comm Dataset"
                      src="./assets/Order-Category.jpg"
                      className="sm:max-w-sm max-h-96 max-w-xs"
                    />
                  </div>
                  <div className="px-0 mx-0">
                    <h1 className="text-start text-lg font-semibold">
                      Descriptive Statistic:
                    </h1>
                    <img
                      alt="Statistika Deskriptif"
                      src="./assets/Statistika_Deskriptif.jpg"
                      className="sm:max-w-3xl max-h-96 max-w-xs"
                    />
                  </div>
                </li>
              </ul>
              <ul className="pt-10">
                <h1 className="text-start font-semibold text-2xl">
                  Data Preparation and Proccesing
                </h1>
                <li className="sm:flex sm:flex-row sm:justify-stretch flex flex-col gap-4">
                  <div>
                    <h1 className="text-start text-lg font-semibold">
                      Split Data (80:20):
                    </h1>
                    <img
                      alt="Data split"
                      src="./assets/Train-test-split.jpg"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                  <div>
                    <h1 className="text-start text-lg font-semibold">
                      Balancing Dataset:
                    </h1>
                    <img
                      alt="Under and Over Sampling"
                      src="./assets/Under-Over.jpg"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                </li>
              </ul>
              <ul className="pt-10">
                <h1 className="text-start font-semibold text-2xl">Modelling</h1>
                <li className="sm:flex sm:flex-row sm:justify-stretch flex flex-col gap-4">
                  <div>
                    <h1 className="text-start text-lg font-semibold">
                      Logistic Regression
                    </h1>
                    <img
                      alt="Logistic Regression Score"
                      src="./assets/LR-Score.jpg"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                  <div>
                    <h1 className="text-start text-lg font-semibold">
                      Random Forest:
                    </h1>
                    <img
                      alt="Random Forest Score"
                      src="./assets/RF-Score.jpg"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                </li>
                <li className="sm:flex sm:flex-row sm:justify-stretch flex flex-col gap-4">
                  <div>
                    <h1 className="text-start text-lg font-semibold">
                      XGBoost Classification
                    </h1>
                    <img
                      alt="XGBoost Score"
                      src="./assets/XGBoost-Score.jpg"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                </li>
              </ul>
              <ul className="pt-10">
                <h1 className="text-start font-semibold text-2xl">
                  Evaluation Model
                </h1>
                <li className="sm:flex sm:flex-row sm:justify-stretch flex flex-col gap-4">
                  <div>
                    <h1 className="text-start text-lg font-semibold">
                      Logistic Regression
                    </h1>
                    <h1>Classification Report</h1>
                    <img
                      alt="Logistic Regression Report"
                      src="./assets/LR-Report.jpg"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                  <div>
                    <br />
                    <h1>ROC AUC</h1>
                    <img
                      alt="ROC Curve Logistic Regression"
                      src="./assets/LR-ROC.png"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                </li>
                <li className="sm:flex sm:flex-row sm:justify-stretch flex flex-col gap-4">
                  <div>
                    <h1 className="text-start text-lg font-semibold">
                      Random Forest
                    </h1>
                    <h1>Classification Report</h1>
                    <img
                      alt="Random Forest Report"
                      src="./assets/RF-Report.jpg"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                  <div>
                    <br />
                    <h1>ROC AUC</h1>
                    <img
                      alt="ROC Curve Random Forest"
                      src="./assets/RF-ROC.png"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                </li>
                <li className="sm:flex sm:flex-row sm:justify-stretch flex flex-col gap-4">
                  <div>
                    <h1 className="text-start text-lg font-semibold">
                      XGBoost Classification
                    </h1>
                    <h1>Classification Report</h1>
                    <img
                      alt="XGBoost Report"
                      src="./assets/XGBoost-Report.jpg"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                  <div>
                    <br />
                    <h1>ROC AUC</h1>
                    <img
                      alt="ROC Curve XGBoost"
                      src="./assets/XGBoost-ROC.png"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg">More About This Project?</h1>
            </div>
            <div>
              <Link
                to="https://drive.google.com/file/d/1oSh3MJXr-MwtZkzoVuqVW7VNZOk7bull/view?usp=sharing"
                target="_blank"
              >
                <Button color="primary">GO TO FILE</Button>
              </Link>
            </div>
          </Hero.Content>
        </Hero>
        <Divider>Public Opinion</Divider>
        <Hero className="py-10">
          <Hero.Content className="flex flex-col bg-gray-400">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">Public Opinion Analysis</h1>
              <h1 className="text-xl font-semibold sm:px-48 py-10">
                This project explains the analysis of public opinion about
                indomie products on the Twitter platform. Public data collection
                uses the Twitter API to perform data scrapping. From the results
                of this analysis, a conclusion will be obtained whether the
                public likes this product or not.
              </h1>
              <img
                alt="Data Twitter Api"
                src="./assets/twitter_api.jpg"
                className="sm:max-w-xl self-center max-w-xs"
              />
            </div>
            <div className="self-start">
              <div className="flex flex-row justify-start my-10">
                <h1 className="font-semibold text-2xl">
                  <i>Web Scrapping</i> --> Using Twitter API
                </h1>
              </div>
              <div className="sm:flex sm:flex-row sm:justify-around flex flex-col justify-around">
                <div className="flex flex-col justify-start my-10">
                  <h1 className="font-semibold text-xl">Dirty Data:</h1>
                  <img
                    className="sm:max-w-xl max-h-96 max-w-xs"
                    alt="Data Scrapping"
                    src="./assets/data_dirty.jpg"
                  />
                </div>
                <div className="flex flex-col justify-start my-10">
                  <h1 className="font-semibold text-xl">Cleansy Data:</h1>
                  <img
                    alt="Data Scrapping"
                    src="./assets/data_scrapping.jpg"
                    className="sm:max-w-xl max-h-96 max-w-xs"
                  />
                </div>
              </div>
              <div className="sm:flex sm:flex-row sm:justify-around flex flex-col justify-around my-10">
                <h1 className="font-semibold text-2xl">
                  Sentiment Analysis With{" "}
                  <a href="https://github.com/IndoNLP/indonlu">IndoNLU</a>
                </h1>
              </div>
              <div className="flex flex-col justify-start my-10">
                <h1 className="font-semibold text-xl text-start">
                  IndoNLU Dataset:
                </h1>
                <img
                  src="./assets/data_train_indonlu.jpg"
                  alt="IndoNLU Dataset"
                  className="sm:max-w-xl max-h-96 max-w-xs"
                />
              </div>
              <div className="flex flex-col justify-start my-10">
                <h1 className="font-semibold text-xl text-center mb-10">
                  Word Cloud
                </h1>
                <div className="sm:flex sm:flex-row sm:justify-around flex flex-col justify-around gap-10">
                  <div>
                    <h1 className="font-semibold text-xl">Negative Word</h1>{" "}
                    <img
                      src="./assets/negative_word_cloud.png"
                      alt="Negative Word Cloud"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold text-xl">Postive Word</h1>{" "}
                    <img
                      src="./assets/positive_word_cloud.png"
                      alt="Positive Word Cloud"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start my-10">
                <h1 className="font-semibold text-xl text-center mb-10">
                  TF-IDF and SVC Model
                </h1>
                <div className="sm:flex sm:flex-row sm:justify-around flex flex-col justify-around">
                  <div>
                    <h1 className="font-semibold text-xl">Sentiment Result</h1>{" "}
                    <img
                      src="./assets/sentiment_result.jpg"
                      alt="Sentiment Result"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold text-xl">Total Sentiment</h1>{" "}
                    <img
                      src="./assets/total_sentiment.jpg"
                      alt="Total Sentiment"
                      className="sm:max-w-xl max-h-96 max-w-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1>More About This Project?</h1>
            </div>
            <div>
              <Link
                to="https://drive.google.com/drive/folders/1svqhBozyfG-OeH2yIpf7YlyFaR3QRCZi?usp=sharing"
                target="_blank"
              >
                <Button color="primary">GO TO FILE</Button>
              </Link>
            </div>
          </Hero.Content>
        </Hero>
      </div>
    </CSSTransition>
  );
}
