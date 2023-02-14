import ActiveLink from '@/components/ActiveLink';
import TitleLogo from '@/components/global/logos/TitleLogo';
import OutsideClick from '@/components/OutsideClick';
import dynamic from 'next/dynamic';
import {
  Dispatch,
  forwardRef,
  LegacyRef,
  SetStateAction,
  useEffect,
  useRef,
} from 'react';
import { useSigninCheck } from 'reactfire';

const AvatarMenu = dynamic<any>(() => import('@/components/user/AvatarMenu'), {
  ssr: false,
});

export default function AppMenu({
  setOverlayMenuActive,
  overlayMenuActive,
  userMenu,
  setUserMenu,
}: {
  setOverlayMenuActive: Dispatch<SetStateAction<boolean>>;
  overlayMenuActive: boolean;
  userMenu: boolean;
  setUserMenu: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const { data: signInCheckResult } = useSigninCheck();
  const focusme = useRef<null | any>(null);

  useEffect(() => {
    if (focusme && focusme.current && overlayMenuActive) {
      focusme.current.focus();
    }
  }, [overlayMenuActive]);

  const LinkItem = (
    {
      href,
      comparison,
      name,
    }: {
      href: string;
      comparison: string;
      name: string;
    },
    ref: LegacyRef<HTMLDivElement> | null
  ) => {
    return (
      <ActiveLink
        activeClassName="bg-primary-500 rounded-sm"
        href={href}
        comparison={comparison}
      >
        <div className="p-2 links-secondary hover:bg-primary-500" ref={ref}>
          <span className="sr-only">{`${name}`}</span>
          {name}
        </div>
      </ActiveLink>
    );
  };

  const Link = forwardRef(LinkItem);

  return (
    <div
      className={`${
        overlayMenuActive
          ? 'fixed inset-0 bg-primary-100 bg-opacity-70 z-50'
          : 'hidden'
      }`}
    >
      <OutsideClick toggle={setOverlayMenuActive} value={false}>
        <section
          className="absolute inset-y-0 right-0 grid grid-cols-1"
          aria-labelledby="slide-over-heading"
        >
          <section className="grid h-full grid-cols-1 shadow-xl grid-rows-sidebar bg-primary-900 dark:bg-primary-900">
            <section className="flex items-center gap-4 p-4 space-between bg-primary-800 dark:bg-primary-800">
              <ActiveLink href="/">
                <TitleLogo ajFaceStandard={false} />
              </ActiveLink>

              <button
                className="inline-flex items-center justify-center p-2 text-xl rounded-md text-basics-50 hover:text-basics-50 dark:hover:text-basics-50 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-basics-50"
                aria-expanded="false"
                onClick={() => setOverlayMenuActive(!overlayMenuActive)}
              >
                <span className="sr-only">Open main menu</span>
                {!overlayMenuActive ? (
                  <svg
                    className="block w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </section>

            <nav
              className="grid content-start h-full gap-4 p-4 bg-primary-900 dark:bg-primary-900"
              aria-label="Sidebar"
            >
              <Link
                href="/courses"
                comparison="/course"
                name="Courses"
                ref={focusme}
              />
              <Link href="/tutorials" comparison="/tutorial" name="Tutorials" />
              <Link href="/blog" comparison="/post" name="Blog" />
              <Link href="/podcasts" comparison="/podcast" name="Podcasts" />
              <Link href="/schedule" comparison="/schedule" name="Schedule" />
              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://www.bonfire.com/store/codingcatdev-swag/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="links-secondary"
                >
                  Swag Store
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </nav>
            <section className="flex self-end p-4 bg-primary-700 dark:bg-primary-700">
              <OutsideClick toggle={setUserMenu} value={false}>
                <div className="flex items-center cursor-pointer links-secondary">
                  <AvatarMenu
                    userMenu={userMenu}
                    setUserMenu={setUserMenu}
                    positionClass="left-0 bottom-0 mb-6"
                  />
                  {signInCheckResult &&
                    signInCheckResult?.signedIn === true && (
                      <button
                        className="ml-2"
                        onClick={() => setUserMenu(true)}
                      >
                        <p className="text-sm font-medium text-left text-basics-50">
                          {signInCheckResult?.user?.displayName}
                        </p>
                        <p className="text-xs font-medium text-left text-basics-200 dark:text-basics-200 group-hover:text-basics-200">
                          {signInCheckResult?.user?.email}
                        </p>
                      </button>
                    )}
                </div>
              </OutsideClick>
            </section>
          </section>
        </section>
      </OutsideClick>
      {/* </div> */}
    </div>
  );
}