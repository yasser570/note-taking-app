import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  addNote?: Maybe<Note>;
  login?: Maybe<User>;
  signUp: User;
};


export type MutationAddNoteArgs = {
  body?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Note = {
  __typename?: 'Note';
  body?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  note?: Maybe<Note>;
  notes: Array<Note>;
};


export type QueryNoteArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  username: Scalars['String'];
};

export type UserInfoFragment = { __typename?: 'User', id: string, name: string, username: string };

export type NoteInfoFragment = { __typename?: 'Note', id: string, title?: string | null | undefined, body?: string | null | undefined, createdAt: any, updatedAt: any };

export type CurrentUserQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQueryQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', id: string, name: string, username: string } | null | undefined };

export type NotesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NotesQueryQuery = { __typename?: 'Query', notes: Array<{ __typename?: 'Note', id: string, title?: string | null | undefined, body?: string | null | undefined, createdAt: any, updatedAt: any }> };

export type NoteQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type NoteQuery = { __typename?: 'Query', note?: { __typename?: 'Note', id: string, title?: string | null | undefined, body?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined };

export type SignUpMutationMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutationMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', id: string, name: string, username: string } };

export type LoginMutationMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', id: string, name: string, username: string } | null | undefined };

export type AddNoteMutationMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['String'];
}>;


export type AddNoteMutationMutation = { __typename?: 'Mutation', addNote?: { __typename?: 'Note', id: string, title?: string | null | undefined, body?: string | null | undefined, createdAt: any, updatedAt: any } | null | undefined };

export const UserInfoFragmentDoc = gql`
    fragment UserInfo on User {
  id
  name
  username
}
    `;
export const NoteInfoFragmentDoc = gql`
    fragment NoteInfo on Note {
  id
  title
  body
  createdAt
  updatedAt
}
    `;
export const CurrentUserQueryDocument = gql`
    query CurrentUserQuery {
  currentUser {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useCurrentUserQueryQuery__
 *
 * To run a query within a React component, call `useCurrentUserQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQueryQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>(CurrentUserQueryDocument, options);
      }
export function useCurrentUserQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>(CurrentUserQueryDocument, options);
        }
export type CurrentUserQueryQueryHookResult = ReturnType<typeof useCurrentUserQueryQuery>;
export type CurrentUserQueryLazyQueryHookResult = ReturnType<typeof useCurrentUserQueryLazyQuery>;
export type CurrentUserQueryQueryResult = Apollo.QueryResult<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>;
export const NotesQueryDocument = gql`
    query NotesQuery {
  notes {
    ...NoteInfo
  }
}
    ${NoteInfoFragmentDoc}`;

/**
 * __useNotesQueryQuery__
 *
 * To run a query within a React component, call `useNotesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotesQueryQuery(baseOptions?: Apollo.QueryHookOptions<NotesQueryQuery, NotesQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotesQueryQuery, NotesQueryQueryVariables>(NotesQueryDocument, options);
      }
export function useNotesQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotesQueryQuery, NotesQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotesQueryQuery, NotesQueryQueryVariables>(NotesQueryDocument, options);
        }
export type NotesQueryQueryHookResult = ReturnType<typeof useNotesQueryQuery>;
export type NotesQueryLazyQueryHookResult = ReturnType<typeof useNotesQueryLazyQuery>;
export type NotesQueryQueryResult = Apollo.QueryResult<NotesQueryQuery, NotesQueryQueryVariables>;
export const NoteDocument = gql`
    query Note($id: String!) {
  note(id: $id) {
    ...NoteInfo
  }
}
    ${NoteInfoFragmentDoc}`;

/**
 * __useNoteQuery__
 *
 * To run a query within a React component, call `useNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNoteQuery(baseOptions: Apollo.QueryHookOptions<NoteQuery, NoteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoteQuery, NoteQueryVariables>(NoteDocument, options);
      }
export function useNoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoteQuery, NoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoteQuery, NoteQueryVariables>(NoteDocument, options);
        }
export type NoteQueryHookResult = ReturnType<typeof useNoteQuery>;
export type NoteLazyQueryHookResult = ReturnType<typeof useNoteLazyQuery>;
export type NoteQueryResult = Apollo.QueryResult<NoteQuery, NoteQueryVariables>;
export const SignUpMutationDocument = gql`
    mutation SignUpMutation($email: String!, $username: String!, $password: String!) {
  signUp(email: $email, username: $username, password: $password) {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;
export type SignUpMutationMutationFn = Apollo.MutationFunction<SignUpMutationMutation, SignUpMutationMutationVariables>;

/**
 * __useSignUpMutationMutation__
 *
 * To run a mutation, you first call `useSignUpMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutationMutation, { data, loading, error }] = useSignUpMutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutationMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutationMutation, SignUpMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutationMutation, SignUpMutationMutationVariables>(SignUpMutationDocument, options);
      }
export type SignUpMutationMutationHookResult = ReturnType<typeof useSignUpMutationMutation>;
export type SignUpMutationMutationResult = Apollo.MutationResult<SignUpMutationMutation>;
export type SignUpMutationMutationOptions = Apollo.BaseMutationOptions<SignUpMutationMutation, SignUpMutationMutationVariables>;
export const LoginMutationDocument = gql`
    mutation LoginMutation($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;
export type LoginMutationMutationFn = Apollo.MutationFunction<LoginMutationMutation, LoginMutationMutationVariables>;

/**
 * __useLoginMutationMutation__
 *
 * To run a mutation, you first call `useLoginMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutationMutation, { data, loading, error }] = useLoginMutationMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutationMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutationMutation, LoginMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutationMutation, LoginMutationMutationVariables>(LoginMutationDocument, options);
      }
export type LoginMutationMutationHookResult = ReturnType<typeof useLoginMutationMutation>;
export type LoginMutationMutationResult = Apollo.MutationResult<LoginMutationMutation>;
export type LoginMutationMutationOptions = Apollo.BaseMutationOptions<LoginMutationMutation, LoginMutationMutationVariables>;
export const AddNoteMutationDocument = gql`
    mutation AddNoteMutation($title: String!, $body: String!) {
  addNote(title: $title, body: $body) {
    ...NoteInfo
  }
}
    ${NoteInfoFragmentDoc}`;
export type AddNoteMutationMutationFn = Apollo.MutationFunction<AddNoteMutationMutation, AddNoteMutationMutationVariables>;

/**
 * __useAddNoteMutationMutation__
 *
 * To run a mutation, you first call `useAddNoteMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNoteMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNoteMutationMutation, { data, loading, error }] = useAddNoteMutationMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useAddNoteMutationMutation(baseOptions?: Apollo.MutationHookOptions<AddNoteMutationMutation, AddNoteMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNoteMutationMutation, AddNoteMutationMutationVariables>(AddNoteMutationDocument, options);
      }
export type AddNoteMutationMutationHookResult = ReturnType<typeof useAddNoteMutationMutation>;
export type AddNoteMutationMutationResult = Apollo.MutationResult<AddNoteMutationMutation>;
export type AddNoteMutationMutationOptions = Apollo.BaseMutationOptions<AddNoteMutationMutation, AddNoteMutationMutationVariables>;