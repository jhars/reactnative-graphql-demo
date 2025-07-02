import { gql } from "@apollo/client";

export const TIME_UNTIL_DRAFT = gql`
  subscription DraftTime {
    timeUntilDraft
  }
`;
