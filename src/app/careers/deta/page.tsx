import { FAQ, HeroSection } from "@/components";
import { JobList } from "../components";
import { DescriptionContent } from "./components";
import JobDescription from "./components/JobDescription";
import Responsibilities from "./components/Responsibilities";
import Requirements from "./components/Requirements";

export default function ServicePage() {
  return (
    <>
      <HeroSection
        title="Multimedia Artist & Animator"
        descriptionComponent={<DescriptionContent />}
        containerClassName="pb-[50px]"
      />
      <div className="container grid grid-cols-6 gap-9 p-6 lg:p-12 shadow-job-description -translate-y-[50px] lg:-translate-y-[80px] rounded-lg bg-white">
        <div className="col-span-4 space-y-6 lg:space-y-9">
          <JobDescription />
          <Responsibilities />
          <Requirements />
        </div>
        <div className="col-span-1"></div>
      </div>
      <JobList />
    </>
  );
}
