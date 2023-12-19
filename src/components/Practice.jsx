import line from "../assets/lineIcon.svg";
const Practice = () => {
  return (
    <div className="layout font-mont px-5 md:px-20 bg-[#150E28] py-16 text-white">
      <div className="w-full flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col gap-4 items-end justify-end">
          <h2 className="text-xl font-bold md:text-2xl text-center lg:text-3xl clash">
            Timeline
          </h2>
          <p className="text-center text-sm font-normal">
            Here is the breakdown of the time we anticipate
            <br className="hidden md:block" /> using for the upcoming event.
          </p>
        </div>
        <div className="flex flex-col gap-10 items-center justify-center w-full">
          <div className="flex items-end gap-20">
            <div className="flex flex-col w-full text-right">
              <h3 className="font-bold text-primary text-lg lg:text-2xl">
                Hackathon Announcement
              </h3>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={line}
                alt="line_icon"
                className="h-[115px] md:h-[137px] object-contain"
              />
              <span className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center rounded-full buttonGradient text-sm font-bold md:text-lg">
                1
              </span>
            </div>
            <h2 className="w-full">November 18, 2023</h2>
          </div>
          <div className="flex-row-reverse flex items-end gap-20">
            <div className="w-full">
              <h3>Hackathon Announcement</h3>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={line}
                alt="line_icon"
                className="h-[115px] md:h-[137px] object-contain"
              />
              <span className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center rounded-full buttonGradient text-sm font-bold md:text-lg">
                2
              </span>
            </div>
            <h2 className="w-full text-right font-bold text-primary text-lg lg:text-2xl">
              November 18, 2023
            </h2>
          </div>
          <div className="flex items-end gap-20">
            <div className="flex flex-col w-full text-right justify-end items-end">
              <h3 className="font-bold text-primary text-lg lg:text-2xl">
                Teams Registration ends
              </h3>
              <p className="text-sm font-normal">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={line}
                alt="line_icon"
                className="h-[115px] md:h-[137px] object-contain"
              />
              <span className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center rounded-full buttonGradient text-sm font-bold md:text-lg">
                3
              </span>
            </div>
            <h2 className="w-full">November 18, 2023</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
