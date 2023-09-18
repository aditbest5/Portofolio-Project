import { Navbar, Button, Dropdown, Countdown, Menu } from "react-daisyui";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function MyNavbar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  return (
    <div>
      <Navbar className="z-[50] fixed top-0 left-0 right-0 bg-gradient-to-br from-rose-200 to-gray-300">
        <Navbar.Start>
          <Dropdown className="lg:hidden">
            <Button
              tag="label"
              color="ghost"
              tabIndex={0}
              className="lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-[1]">
              <Link to="/">
                <Dropdown.Item>Homepage</Dropdown.Item>
              </Link>
              <Menu.Item>
                <Menu.Dropdown
                  label="Projects"
                  onClick={toggleOpen}
                  open={open}
                >
                  <Menu.Item>
                    <Link to="/front-end">Front End</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/back-end">Back End</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link>IoT</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/data-science">Data Science</Link>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu.Item>
              <Link to="/about">
                <Dropdown.Item>About</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
          <div className="flex-none">
            <Menu horizontal={true} className="px-1 hidden lg:flex">
              <Menu.Item className="font-bold">
                <Link to="/">Homepage</Link>
              </Menu.Item>
              <Menu.Item>
                <details>
                  <summary className="font-bold">
                    <Link to="/projects">Projects</Link>
                  </summary>
                  <ul className="p-2 bg-base-100 w-32">
                    <li>
                      <Link to="/front-end">Front End</Link>
                    </li>
                    <li>
                      <Link to="/back-end">Back End</Link>
                    </li>
                    <li>
                      <Link>IoT</Link>
                    </li>
                    <li>
                      <Link to="/data-science">Data Science</Link>
                    </li>
                  </ul>
                </details>
              </Menu.Item>
              <Menu.Item className="font-bold">
                <Link to="/about">About</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Navbar.Start>
        <Navbar.Center>
          <Link to="/">
            <Button tag="a" color="ghost" className="normal-case text-xl">
              My Portofolio
            </Button>
          </Link>
        </Navbar.Center>
        <Navbar.End className="navbar-end">
          <span className="pr-2">Time:</span>
          <Countdown value={hours} />:
          <Countdown value={minutes} />:
          <Countdown value={seconds} />
        </Navbar.End>
      </Navbar>
    </div>
  );
}
