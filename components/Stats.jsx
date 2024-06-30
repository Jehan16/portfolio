"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";

const stats = [
  //   {
  //     num: 0,
  //     text: "Years of experience",
  //   },
  //   {
  //     num: 0,
  //     text: "Projects completed",
  //   },
  //   {
  //     num: 0,
  //     text: "Technologies mastered",
  //   },
  // Placeholder for GitHub commits
];

const Stats = () => {
  const [commitCount, setCommitCount] = useState(0);

  useEffect(() => {
    const fetchCommitCount = async () => {
      try {
        const reposResponse = await axios.get(
          "https://api.github.com/users/Jehan16/repos"
        );
        const repos = reposResponse.data;

        let totalCommits = 0;

        for (const repo of repos) {
          const commitsResponse = await axios.get(
            `https://api.github.com/repos/Jehan16/${repo.name}/commits?per_page=1`
          );
          const commitCount = commitsResponse.headers["link"]
            ? parseInt(
                commitsResponse.headers["link"].match(
                  /&page=(\d+)>; rel="last"/
                )[1]
              )
            : commitsResponse.data.length;
          totalCommits += commitCount;
        }

        setCommitCount(totalCommits);
      } catch (error) {
        console.error("Error fetching commit count:", error);
      }
    };

    fetchCommitCount();
  }, []);

  const updatedStats = [...stats, { num: commitCount, text: "Code commits" }];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {updatedStats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
