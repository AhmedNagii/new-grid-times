import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <HeaderCon>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupDeskTop>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupDeskTop>
        <Logo />
        <SubscribeWrapper>
          <Button>
          Subscribe
          </Button>  
          <SubLink herf="/">Already a subscriber</SubLink>
        
        </SubscribeWrapper>
      </MainHeader>
    </HeaderCon>
  );
};

const HeaderCon = styled.header``;
const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: ${COLORS.white};
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
  FIX: Remove the inline spacing that comes with
  react-feather icons.
  */
  svg {
    display: block;
  }
`;
const ActionGroupDeskTop = styled(ActionGroup)`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
    justify-items: start;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;
const SubLink = styled.a`

font-size: 0.875rem;
color: var(--color-gray-900);
font-style: italic;
text-decoration: underline;
`;
const SubscribeWrapper = styled.div`
  display: none;
  

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    justify-self: end;
    align-self: end;
    flex-direction: column;
    align-items: center;
    gap: 8px;

  }
`;

export default Header;
