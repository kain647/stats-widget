import React from "react";
import styled from "styled-components";
import {
  Container,
  TitleBox,
  Text,
  StatsBox,
  BoxContainer,
  StatsHeader,
  HeaderContainer,
  Subscribers,
  Total,
  Week,
  Subtitle,
  Percent,
  SubTotal,
  TotalContainer,
  SocialNetwork,
  Number,
  NetworkContainer,
  VisitorsContainer,
  PopUp
} from "./styled";

const Icon = styled.i.attrs(props => {
  return {
    className: `${props.pack} fa-${props.icon}`
  };
})`
  color: ${({ color }) => color};
  margin-right: 10px;
`;

const IconFab = styled(Icon).attrs({
  pack: "fab"
})``;

const IconFas = styled(Icon).attrs({
  pack: "fas"
})``;

const Widget = props => {
  const items = [
    {
      title: "moore.co.uk",
      icon: "laptop",
      color: "#96316D"
    },
    {
      title: "Dasboard",
      icon: "cogs",
      color: "#666666"
    },
    {
      title: "Add Post",
      icon: "plus-circle",
      color: "#666666"
    },
    {
      title: "Content",
      icon: "list",
      color: "#666666"
    },
    {
      title: "Taxonomy",
      icon: "network-wired",
      color: "#666666"
    },
    {
      title: "Storage",
      icon: "box-open",
      color: "#666666"
    },
    {
      title: "Comments",
      icon: "comment-dots",
      color: "#666666"
    },
    {
      title: "Statistics",
      icon: "chart-bar",
      color: "#666666"
    },
    {
      title: "Settings",
      icon: "sliders-h",
      color: "#666666"
    }
  ];

  const networks = [
    {
      icon: "vk",
      number: "2456",
      color: "#F7F7F6"
    },
    {
      icon: "twitter",
      number: "963",
      color: "#F7F7F6"
    },
    {
      icon: "facebook",
      number: "3574",
      color: "#F7F7F6"
    },
    {
      icon: "linkedin",
      number: "247",
      color: "#F7F7F6"
    }
  ];
  const statistics = [
    {
      total: "87 359",
      percent: "+15%",
      week: " this week",
      subtotal: "visitor",
      color: "#90EE90"
    },
    {
      total: "6 305",
      percent: "+78",
      week: " this week",
      subtotal: "comments",
      color: "#90EE90"
    },
    {
      total: "268",
      percent: "-3%",
      week: " this week",
      subtotal: "posts",
      color: "#ff0000"
    }
  ];
  return (
    <BoxContainer>
      <Container>
        {items.map(item => {
          const { title, icon, color } = item;
          return <Item title={title} icon={icon} color={color} />;
        })}
        <PopUp>8</PopUp>
      </Container>
      <StatsBox>
        <HeaderContainer>
          <StatsHeader>stats</StatsHeader>
          <IconFas icon="cog" pack={"fas"} color="lightgray" />
        </HeaderContainer>
        <Subscribers>
          <TotalContainer>
            <Total>12 698</Total>
            <Week>
              <Percent>+6%</Percent>
              <Subtitle>this week</Subtitle>
            </Week>
          </TotalContainer>
          <SubTotal>subscribers</SubTotal>
        </Subscribers>
        <NetworkContainer>
          {networks.map(network => {
            const { number, icon, color } = network;
            return <Network number={number} icon={icon} color={color} />;
          })}
        </NetworkContainer>
        {statistics.map(statistic => {
          const { total, percent, week, subtotal, color } = statistic;
          return (
            <Statistic
              total={total}
              subtotal={subtotal}
              percent={percent}
              week={week}
              color={color}
            />
          );
        })}
      </StatsBox>
    </BoxContainer>
  );
};

const Statistic = props => {
  const { total, percent, week, subtotal, color } = props;
  return (
    <>
      <VisitorsContainer>
        <Total>{total}</Total>
        <Week>
          <Percent color={color}>{percent}</Percent>
          <Subtitle>{week}</Subtitle>
        </Week>
      </VisitorsContainer>
      <SubTotal>{subtotal}</SubTotal>
    </>
  );
};

const Network = props => {
  const { icon, number, color } = props;
  return (
    <SocialNetwork>
      <IconFab icon={icon} pack="fab" color={color} />
      <Number>{number}</Number>
    </SocialNetwork>
  );
};

const Item = props => {
  const { title, icon, color } = props;
  return (
    <TitleBox>
      <IconFas icon={icon} pack={"fas"} color={color} />
      <Text>{title}</Text>
    </TitleBox>
  );
};

export default Widget;
