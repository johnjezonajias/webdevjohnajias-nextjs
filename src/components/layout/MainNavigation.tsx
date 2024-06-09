'use client';

import Link from 'next/link';
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import { NavigationMenu, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { useAdaptiveColor } from '@/hooks/useAdaptiveColor';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const LINKS = [
  {
    name: 'Home',
    slug: '/',
    link: '/',
  },
  {
    name: 'Tech Stacks',
    slug: 'tech-stacks',
    link: '/#tech-stacks',
  },
  {
    name: 'Portfolio',
    slug: 'portfolio',
    link: '/#portfolio',
  },
  {
    name: 'Work Experience',
    slug: 'work-experience',
    link: '/#work-experience',
  },
  {
    name: 'Contact Me',
    slug: 'contact',
    link: 'mailto:johnjezonajias@gmail.com',
  },
];

const createElm = (menuItem: any) => {
  const menuItemsTexts = menuItem.querySelector('.menu-text');
  const menuItemsTextsArray = [...menuItemsTexts.textContent];

  menuItemsTexts.textContent = '';

  menuItemsTextsArray.forEach((menuItemText) => {
    const span = document.createElement('span');
    span.textContent = menuItemText;
    menuItemsTexts.appendChild(span);
  });

  const parentElm = menuItemsTexts.parentElement;
  const parentElmHeight = parentElm.clientHeight;
  parentElm.style.height = `${parentElmHeight}px`;

  const cloneItem = menuItemsTexts.cloneNode(true);
  cloneItem.classList.add('clone');
  parentElm.appendChild(cloneItem);
};

const animation = (menuItem: any) => {
  const menuTextChildren = Array.from(menuItem.querySelector('.menu-text').children);
  const cloneChildren = Array.from(menuItem.querySelector('.clone').children);

  menuItem.addEventListener('mouseover', () => {
    gsap.to(menuTextChildren, { y: '-100%', ease: 'power1', stagger: 0.02 });
    gsap.to(cloneChildren, { y: '-100%', ease: 'power1', stagger: 0.02 });
  });

  menuItem.addEventListener('mouseleave', () => {
    gsap.to(menuTextChildren, { y: '0', ease: 'power1', stagger: 0.02 });
    gsap.to(cloneChildren, { y: '0', ease: 'power1', stagger: 0.02 });
  });
};

const MainNavigation = (props: NavigationMenuProps) => {
  const color = useAdaptiveColor('siteHeader');

  useEffect(() => {
    const targetItems = document.querySelectorAll('.js-menu-item');

    targetItems.forEach((targetItem) => {
      createElm(targetItem);
      animation(targetItem);
    });
  }, []);

  return (
    <NavigationMenu {...props}>
      <ul className="flex flex-row items-center gap-x-14">
        {LINKS.map(({ name, slug, link }) => (
          <li key={slug} className="js-menu-item">
            <NavigationMenuLink asChild>
              <Link
                className="font-semibold flex text-base uppercase outline-none"
                href={link}
                onClick={props.onClick}
                style={{ color }}
              >
                <div className="menu-text-container relative inline-block">
                  <span className="menu-text flex">{name}</span>
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </NavigationMenu>
  );
};

export default MainNavigation;
