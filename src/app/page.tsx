import { About } from "./_components/About";
import { Contact } from "./_components/Contact";
import { Profile } from "./_components/Profile";
import { Projects } from "./_components/Projects";
import { Techs } from "./_components/Techs";
export default function page() {
  return (
    <main>
      <Profile />
      <About />
      <Projects />
      <Techs />
      <Contact />
    </main>
  );
}
