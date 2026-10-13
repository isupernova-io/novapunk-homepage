import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image';
import team1Img from "@/assets/images/team/1.jpg";
import team2Img from "@/assets/images/team/2.jpg";
import team3Img from "@/assets/images/team/3.jpg";

type TeamMember = {
  name: string;
  role: string;
  image: StaticImageData;
  socials: {
    facebook: string;
    linkedin: string;
    instagram: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "James T",
    role: "AI Research Lead",
    image: team1Img,
    socials: {
      facebook: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Sarah L",
    role: "Head of Product",
    image: team2Img,
    socials: {
      facebook: "",
      linkedin: "",
      instagram: "",
    },
  },
  {
    name: "Michael R",
    role: "Content Strategy",
    image: team3Img,
    socials: {
      facebook: "",
      linkedin: "",
      instagram: "",
    },
  },
];

const AboutContent = () => {
  return (
      <>
      <section className="size-full lg:px-7.5 md:px-5 px-4 overflow-hidden">
        <div className="container relative z-10 border-y-2 border-default-100">
          <div className="lg:w-178 mx-auto relative z-10">
            <div className="relative">
              <div className="bg-white border-x-2 border-default-100 divide-y-2 divide-default-100 pb-30">

                <div className="py-15 px-10">
                  <div className="mb-15 space-y-2.5">
                    <h2 className="text-4xl">Our mission</h2>
                    <p className="">We believe writing should be faster, easier, and more impactful for everyone, whether you're a marketer crafting campaigns, a founder scaling content, or a creator bringing ideas to life.</p>
                    <p className="no-margin-bottom">Our mission is simple: to help you create smarter content with less effort so you can focus more on creativity, strategy, and results, not repetitive writing tasks.</p>
                  </div>

                  <div className="space-y-2.5">
                    <h2 className="text-4xl">Our vision</h2>
                    <p>Our vision is to make AI-powered writing accessible to every team, helping businesses communicate faster with clarity, consistency, and confidence across every platform they use <span className="text-default-950">- anytime, anywhere, effortlessly.</span></p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 divide-x-2 md:divide-y-0 divide-y-2 divide-default-100">

                  <div className="relative p-10">
                    <div className="about-stat-item">
                      <h2 className="text-4xl text-default-950"> <span data-target="50">50</span>M+ </h2>
                      <div>Words Generated</div>
                    </div>

                    <div className="decoration">
                      <span className="decoration-top"></span>
                      <span className="decoration-bottom"></span>
                    </div>
                  </div>

                  <div className="relative p-10 bg-default-100">
                    <h2 className="text-4xl text-default-950">100K+ </h2>
                    <div>Users Worldwide</div>

                    <div className="decoration">
                      <span className="decoration-top"></span>
                      <span className="decoration-bottom"></span>
                    </div>
                  </div>

                  <div className="relative p-10">
                    <h2 className="text-4xl text-default-950">70%</h2>
                    <div>Faster Publish Time</div>

                    <div className="decoration">
                      <span className="decoration-top"></span>
                      <span className="decoration-bottom"></span>
                    </div>
                  </div>
                </div>

                <div className="py-15 px-10 border-b-0">
                  <div className="mb-15 space-y-2.5">
                    <h2 className="text-4xl">Our team</h2>
                    <p className="">A group of writers, developers, and creators passionate about making writing smarter, faster, and easier.</p>
                  </div>

                  <div className="grid md:grid-cols-3 border-2 border-default-100 divide-x-2 divide-default-100">
                    {teamMembers.map((member, idx) => (
                      <div key={idx} className="group">
                        <div className="relative">
                          <Image src={member.image} alt="Team Image" className="w-full h-auto" width={206} height={217.67} />

                          <div className="lg:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="flex items-end gap-2.5 absolute bottom-0 inset-s-0 h-20 p-5 w-full bg-linear-to-b from-transparent to-default-900">
                              <Link href={member.socials.facebook}><Icon icon="tabler:brand-facebook-filled" className="size-5 text-white"></Icon></Link>
                              <Link href={member.socials.linkedin}><Icon icon="tabler:brand-linkedin-filled" className="size-5 text-white"></Icon></Link>
                              <Link href={member.socials.instagram}><Icon icon="tabler:brand-instagram-filled" className="size-5 text-white"></Icon></Link>
                            </div>
                          </div>
                        </div>

                        <div className="p-5">
                          <h3 className="text-xl mb-1">{member.name}</h3>
                          <div className="team-position">{member.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mx-10 p-10 bg-default-100 text-center">
                  <h3 className="text-4xl max-w-100 mx-auto mb-2.5">Start creating better <span className="text-default-500">content with AI today</span></h3>

                  <p className="mb-7.5">Join thousands of teams using AI to<span className="text-black"> write faster</span>.</p>

                  <div className="inline-flex items-center gap-5">
                    <Link href="/contact" className="py-3 px-4 text-xs uppercase inline-flex items-center justify-center gap-2 rounded bg-primary text-white font-medium transition-all duration-500 hover:bg-primary-hover">
                      Start 7-Day Free Trial <Icon icon="tabler:chevron-right" className="size-4"></Icon>
                    </Link>

                    <Link href="/contact" className="py-3 px-4 text-xs uppercase bg-default-950 text-white rounded inline-flex items-center justify-center gap-2">
                      Book a Demo <Icon icon="tabler:chevron-right" className="size-4"></Icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default AboutContent