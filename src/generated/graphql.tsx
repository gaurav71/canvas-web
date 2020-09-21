import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  getShape?: Maybe<ShapeType>;
  getShapes: Array<ShapeType>;
  getCanvas?: Maybe<CanvasType>;
  getAllCanvas: Array<CanvasType>;
  isLogin: Scalars['Boolean'];
};


export type QueryGetShapeArgs = {
  _id: Scalars['String'];
};


export type QueryGetShapesArgs = {
  canvasId: Scalars['String'];
};


export type QueryGetCanvasArgs = {
  _id: Scalars['String'];
};

export type ShapeType = {
  __typename?: 'ShapeType';
  _id: Scalars['String'];
  canvasId: Scalars['String'];
  type: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  attributes: Scalars['JSON'];
  createdAt: Scalars['Float'];
  updatedAt: Scalars['Float'];
};


export type CanvasType = {
  __typename?: 'CanvasType';
  _id: Scalars['String'];
  creatorId: Scalars['String'];
  name: Scalars['String'];
  members: Array<Scalars['String']>;
  createdAt: Scalars['Float'];
  updatedAt: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createShape: ShapeType;
  updateShape: ShapeType;
  deleteShape: Scalars['Boolean'];
  deleteShapes: Scalars['Boolean'];
  createCanvas: CanvasType;
  deleteCanvas: Scalars['Boolean'];
  addMemberToCanvas: Scalars['Boolean'];
  removeMemberFromCanvas: Scalars['Boolean'];
  logout: Scalars['Boolean'];
};


export type MutationCreateShapeArgs = {
  input: ShapeInput;
};


export type MutationUpdateShapeArgs = {
  input: UpdateShapeInput;
  _id: Scalars['String'];
};


export type MutationDeleteShapeArgs = {
  _id: Scalars['String'];
};


export type MutationDeleteShapesArgs = {
  canvasId: Scalars['String'];
};


export type MutationCreateCanvasArgs = {
  name: Scalars['String'];
};


export type MutationDeleteCanvasArgs = {
  _id: Scalars['String'];
};


export type MutationAddMemberToCanvasArgs = {
  userId: Scalars['String'];
  _id: Scalars['String'];
};


export type MutationRemoveMemberFromCanvasArgs = {
  userId: Scalars['String'];
  _id: Scalars['String'];
};

export type ShapeInput = {
  canvasId: Scalars['String'];
  type: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  attributes: Scalars['JSON'];
};

export type UpdateShapeInput = {
  text?: Maybe<Scalars['String']>;
  attributes: Scalars['JSON'];
};

export type Subscription = {
  __typename?: 'Subscription';
  helloSubscription: Scalars['String'];
};

export type CanvasFragmentFragment = (
  { __typename?: 'CanvasType' }
  & Pick<CanvasType, '_id' | 'creatorId' | 'name' | 'members' | 'createdAt' | 'updatedAt'>
);

export type ShapeFragmentFragment = (
  { __typename?: 'ShapeType' }
  & Pick<ShapeType, '_id' | 'canvasId' | 'type' | 'text' | 'attributes' | 'createdAt' | 'updatedAt'>
);

export type AddMemberToCanvasMutationVariables = Exact<{
  _id: Scalars['String'];
  userId: Scalars['String'];
}>;


export type AddMemberToCanvasMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addMemberToCanvas'>
);

export type CreateCanvasMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateCanvasMutation = (
  { __typename?: 'Mutation' }
  & { createCanvas: (
    { __typename?: 'CanvasType' }
    & CanvasFragmentFragment
  ) }
);

export type DeleteCanvasMutationVariables = Exact<{
  _id: Scalars['String'];
}>;


export type DeleteCanvasMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteCanvas'>
);

export type RemoveMemberFromCanvasMutationVariables = Exact<{
  _id: Scalars['String'];
  userId: Scalars['String'];
}>;


export type RemoveMemberFromCanvasMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeMemberFromCanvas'>
);

export type CreateShapeMutationVariables = Exact<{
  canvasId: Scalars['String'];
  type: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  attributes: Scalars['JSON'];
}>;


export type CreateShapeMutation = (
  { __typename?: 'Mutation' }
  & { createShape: (
    { __typename?: 'ShapeType' }
    & ShapeFragmentFragment
  ) }
);

export type DeleteShapeMutationVariables = Exact<{
  _id: Scalars['String'];
}>;


export type DeleteShapeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteShape'>
);

export type DeleteShapesMutationVariables = Exact<{
  canvasId: Scalars['String'];
}>;


export type DeleteShapesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteShapes'>
);

export type UpdateShapeMutationVariables = Exact<{
  _id: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  attributes: Scalars['JSON'];
}>;


export type UpdateShapeMutation = (
  { __typename?: 'Mutation' }
  & { updateShape: (
    { __typename?: 'ShapeType' }
    & ShapeFragmentFragment
  ) }
);

export type GetCanvasQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type GetCanvasQuery = (
  { __typename?: 'Query' }
  & { getCanvas?: Maybe<(
    { __typename?: 'CanvasType' }
    & CanvasFragmentFragment
  )> }
);

export type GetAllCanvasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCanvasQuery = (
  { __typename?: 'Query' }
  & { getAllCanvas: Array<(
    { __typename?: 'CanvasType' }
    & CanvasFragmentFragment
  )> }
);

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type GetShapeQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type GetShapeQuery = (
  { __typename?: 'Query' }
  & { getShape?: Maybe<(
    { __typename?: 'ShapeType' }
    & ShapeFragmentFragment
  )> }
);

export type GetShapesQueryVariables = Exact<{
  canvasId: Scalars['String'];
}>;


export type GetShapesQuery = (
  { __typename?: 'Query' }
  & { getShapes: Array<(
    { __typename?: 'ShapeType' }
    & ShapeFragmentFragment
  )> }
);

export type IsLoginQueryVariables = Exact<{ [key: string]: never; }>;


export type IsLoginQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isLogin'>
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type HelloSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type HelloSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & Pick<Subscription, 'helloSubscription'>
);

export const CanvasFragmentFragmentDoc = gql`
    fragment CanvasFragment on CanvasType {
  _id
  creatorId
  name
  members
  createdAt
  updatedAt
}
    `;
export const ShapeFragmentFragmentDoc = gql`
    fragment ShapeFragment on ShapeType {
  _id
  canvasId
  type
  text
  attributes
  createdAt
  updatedAt
}
    `;
export const AddMemberToCanvasDocument = gql`
    mutation addMemberToCanvas($_id: String!, $userId: String!) {
  addMemberToCanvas(_id: $_id, userId: $userId)
}
    `;
export type AddMemberToCanvasMutationFn = Apollo.MutationFunction<AddMemberToCanvasMutation, AddMemberToCanvasMutationVariables>;

/**
 * __useAddMemberToCanvasMutation__
 *
 * To run a mutation, you first call `useAddMemberToCanvasMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMemberToCanvasMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMemberToCanvasMutation, { data, loading, error }] = useAddMemberToCanvasMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAddMemberToCanvasMutation(baseOptions?: Apollo.MutationHookOptions<AddMemberToCanvasMutation, AddMemberToCanvasMutationVariables>) {
        return Apollo.useMutation<AddMemberToCanvasMutation, AddMemberToCanvasMutationVariables>(AddMemberToCanvasDocument, baseOptions);
      }
export type AddMemberToCanvasMutationHookResult = ReturnType<typeof useAddMemberToCanvasMutation>;
export type AddMemberToCanvasMutationResult = Apollo.MutationResult<AddMemberToCanvasMutation>;
export type AddMemberToCanvasMutationOptions = Apollo.BaseMutationOptions<AddMemberToCanvasMutation, AddMemberToCanvasMutationVariables>;
export const CreateCanvasDocument = gql`
    mutation createCanvas($name: String!) {
  createCanvas(name: $name) {
    ...CanvasFragment
  }
}
    ${CanvasFragmentFragmentDoc}`;
export type CreateCanvasMutationFn = Apollo.MutationFunction<CreateCanvasMutation, CreateCanvasMutationVariables>;

/**
 * __useCreateCanvasMutation__
 *
 * To run a mutation, you first call `useCreateCanvasMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCanvasMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCanvasMutation, { data, loading, error }] = useCreateCanvasMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateCanvasMutation(baseOptions?: Apollo.MutationHookOptions<CreateCanvasMutation, CreateCanvasMutationVariables>) {
        return Apollo.useMutation<CreateCanvasMutation, CreateCanvasMutationVariables>(CreateCanvasDocument, baseOptions);
      }
export type CreateCanvasMutationHookResult = ReturnType<typeof useCreateCanvasMutation>;
export type CreateCanvasMutationResult = Apollo.MutationResult<CreateCanvasMutation>;
export type CreateCanvasMutationOptions = Apollo.BaseMutationOptions<CreateCanvasMutation, CreateCanvasMutationVariables>;
export const DeleteCanvasDocument = gql`
    mutation deleteCanvas($_id: String!) {
  deleteCanvas(_id: $_id)
}
    `;
export type DeleteCanvasMutationFn = Apollo.MutationFunction<DeleteCanvasMutation, DeleteCanvasMutationVariables>;

/**
 * __useDeleteCanvasMutation__
 *
 * To run a mutation, you first call `useDeleteCanvasMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCanvasMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCanvasMutation, { data, loading, error }] = useDeleteCanvasMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useDeleteCanvasMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCanvasMutation, DeleteCanvasMutationVariables>) {
        return Apollo.useMutation<DeleteCanvasMutation, DeleteCanvasMutationVariables>(DeleteCanvasDocument, baseOptions);
      }
export type DeleteCanvasMutationHookResult = ReturnType<typeof useDeleteCanvasMutation>;
export type DeleteCanvasMutationResult = Apollo.MutationResult<DeleteCanvasMutation>;
export type DeleteCanvasMutationOptions = Apollo.BaseMutationOptions<DeleteCanvasMutation, DeleteCanvasMutationVariables>;
export const RemoveMemberFromCanvasDocument = gql`
    mutation removeMemberFromCanvas($_id: String!, $userId: String!) {
  removeMemberFromCanvas(_id: $_id, userId: $userId)
}
    `;
export type RemoveMemberFromCanvasMutationFn = Apollo.MutationFunction<RemoveMemberFromCanvasMutation, RemoveMemberFromCanvasMutationVariables>;

/**
 * __useRemoveMemberFromCanvasMutation__
 *
 * To run a mutation, you first call `useRemoveMemberFromCanvasMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMemberFromCanvasMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMemberFromCanvasMutation, { data, loading, error }] = useRemoveMemberFromCanvasMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveMemberFromCanvasMutation(baseOptions?: Apollo.MutationHookOptions<RemoveMemberFromCanvasMutation, RemoveMemberFromCanvasMutationVariables>) {
        return Apollo.useMutation<RemoveMemberFromCanvasMutation, RemoveMemberFromCanvasMutationVariables>(RemoveMemberFromCanvasDocument, baseOptions);
      }
export type RemoveMemberFromCanvasMutationHookResult = ReturnType<typeof useRemoveMemberFromCanvasMutation>;
export type RemoveMemberFromCanvasMutationResult = Apollo.MutationResult<RemoveMemberFromCanvasMutation>;
export type RemoveMemberFromCanvasMutationOptions = Apollo.BaseMutationOptions<RemoveMemberFromCanvasMutation, RemoveMemberFromCanvasMutationVariables>;
export const CreateShapeDocument = gql`
    mutation createShape($canvasId: String!, $type: String!, $text: String, $attributes: JSON!) {
  createShape(input: {canvasId: $canvasId, type: $type, text: $text, attributes: $attributes}) {
    ...ShapeFragment
  }
}
    ${ShapeFragmentFragmentDoc}`;
export type CreateShapeMutationFn = Apollo.MutationFunction<CreateShapeMutation, CreateShapeMutationVariables>;

/**
 * __useCreateShapeMutation__
 *
 * To run a mutation, you first call `useCreateShapeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShapeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShapeMutation, { data, loading, error }] = useCreateShapeMutation({
 *   variables: {
 *      canvasId: // value for 'canvasId'
 *      type: // value for 'type'
 *      text: // value for 'text'
 *      attributes: // value for 'attributes'
 *   },
 * });
 */
export function useCreateShapeMutation(baseOptions?: Apollo.MutationHookOptions<CreateShapeMutation, CreateShapeMutationVariables>) {
        return Apollo.useMutation<CreateShapeMutation, CreateShapeMutationVariables>(CreateShapeDocument, baseOptions);
      }
export type CreateShapeMutationHookResult = ReturnType<typeof useCreateShapeMutation>;
export type CreateShapeMutationResult = Apollo.MutationResult<CreateShapeMutation>;
export type CreateShapeMutationOptions = Apollo.BaseMutationOptions<CreateShapeMutation, CreateShapeMutationVariables>;
export const DeleteShapeDocument = gql`
    mutation deleteShape($_id: String!) {
  deleteShape(_id: $_id)
}
    `;
export type DeleteShapeMutationFn = Apollo.MutationFunction<DeleteShapeMutation, DeleteShapeMutationVariables>;

/**
 * __useDeleteShapeMutation__
 *
 * To run a mutation, you first call `useDeleteShapeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShapeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShapeMutation, { data, loading, error }] = useDeleteShapeMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useDeleteShapeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteShapeMutation, DeleteShapeMutationVariables>) {
        return Apollo.useMutation<DeleteShapeMutation, DeleteShapeMutationVariables>(DeleteShapeDocument, baseOptions);
      }
export type DeleteShapeMutationHookResult = ReturnType<typeof useDeleteShapeMutation>;
export type DeleteShapeMutationResult = Apollo.MutationResult<DeleteShapeMutation>;
export type DeleteShapeMutationOptions = Apollo.BaseMutationOptions<DeleteShapeMutation, DeleteShapeMutationVariables>;
export const DeleteShapesDocument = gql`
    mutation deleteShapes($canvasId: String!) {
  deleteShapes(canvasId: $canvasId)
}
    `;
export type DeleteShapesMutationFn = Apollo.MutationFunction<DeleteShapesMutation, DeleteShapesMutationVariables>;

/**
 * __useDeleteShapesMutation__
 *
 * To run a mutation, you first call `useDeleteShapesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShapesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShapesMutation, { data, loading, error }] = useDeleteShapesMutation({
 *   variables: {
 *      canvasId: // value for 'canvasId'
 *   },
 * });
 */
export function useDeleteShapesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteShapesMutation, DeleteShapesMutationVariables>) {
        return Apollo.useMutation<DeleteShapesMutation, DeleteShapesMutationVariables>(DeleteShapesDocument, baseOptions);
      }
export type DeleteShapesMutationHookResult = ReturnType<typeof useDeleteShapesMutation>;
export type DeleteShapesMutationResult = Apollo.MutationResult<DeleteShapesMutation>;
export type DeleteShapesMutationOptions = Apollo.BaseMutationOptions<DeleteShapesMutation, DeleteShapesMutationVariables>;
export const UpdateShapeDocument = gql`
    mutation updateShape($_id: String!, $text: String, $attributes: JSON!) {
  updateShape(_id: $_id, input: {text: $text, attributes: $attributes}) {
    ...ShapeFragment
  }
}
    ${ShapeFragmentFragmentDoc}`;
export type UpdateShapeMutationFn = Apollo.MutationFunction<UpdateShapeMutation, UpdateShapeMutationVariables>;

/**
 * __useUpdateShapeMutation__
 *
 * To run a mutation, you first call `useUpdateShapeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShapeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShapeMutation, { data, loading, error }] = useUpdateShapeMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      text: // value for 'text'
 *      attributes: // value for 'attributes'
 *   },
 * });
 */
export function useUpdateShapeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShapeMutation, UpdateShapeMutationVariables>) {
        return Apollo.useMutation<UpdateShapeMutation, UpdateShapeMutationVariables>(UpdateShapeDocument, baseOptions);
      }
export type UpdateShapeMutationHookResult = ReturnType<typeof useUpdateShapeMutation>;
export type UpdateShapeMutationResult = Apollo.MutationResult<UpdateShapeMutation>;
export type UpdateShapeMutationOptions = Apollo.BaseMutationOptions<UpdateShapeMutation, UpdateShapeMutationVariables>;
export const GetCanvasDocument = gql`
    query getCanvas($_id: String!) {
  getCanvas(_id: $_id) {
    ...CanvasFragment
  }
}
    ${CanvasFragmentFragmentDoc}`;

/**
 * __useGetCanvasQuery__
 *
 * To run a query within a React component, call `useGetCanvasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCanvasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCanvasQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useGetCanvasQuery(baseOptions?: Apollo.QueryHookOptions<GetCanvasQuery, GetCanvasQueryVariables>) {
        return Apollo.useQuery<GetCanvasQuery, GetCanvasQueryVariables>(GetCanvasDocument, baseOptions);
      }
export function useGetCanvasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCanvasQuery, GetCanvasQueryVariables>) {
          return Apollo.useLazyQuery<GetCanvasQuery, GetCanvasQueryVariables>(GetCanvasDocument, baseOptions);
        }
export type GetCanvasQueryHookResult = ReturnType<typeof useGetCanvasQuery>;
export type GetCanvasLazyQueryHookResult = ReturnType<typeof useGetCanvasLazyQuery>;
export type GetCanvasQueryResult = Apollo.QueryResult<GetCanvasQuery, GetCanvasQueryVariables>;
export const GetAllCanvasDocument = gql`
    query getAllCanvas {
  getAllCanvas {
    ...CanvasFragment
  }
}
    ${CanvasFragmentFragmentDoc}`;

/**
 * __useGetAllCanvasQuery__
 *
 * To run a query within a React component, call `useGetAllCanvasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCanvasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCanvasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCanvasQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCanvasQuery, GetAllCanvasQueryVariables>) {
        return Apollo.useQuery<GetAllCanvasQuery, GetAllCanvasQueryVariables>(GetAllCanvasDocument, baseOptions);
      }
export function useGetAllCanvasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCanvasQuery, GetAllCanvasQueryVariables>) {
          return Apollo.useLazyQuery<GetAllCanvasQuery, GetAllCanvasQueryVariables>(GetAllCanvasDocument, baseOptions);
        }
export type GetAllCanvasQueryHookResult = ReturnType<typeof useGetAllCanvasQuery>;
export type GetAllCanvasLazyQueryHookResult = ReturnType<typeof useGetAllCanvasLazyQuery>;
export type GetAllCanvasQueryResult = Apollo.QueryResult<GetAllCanvasQuery, GetAllCanvasQueryVariables>;
export const HelloDocument = gql`
    query hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
export const GetShapeDocument = gql`
    query getShape($_id: String!) {
  getShape(_id: $_id) {
    ...ShapeFragment
  }
}
    ${ShapeFragmentFragmentDoc}`;

/**
 * __useGetShapeQuery__
 *
 * To run a query within a React component, call `useGetShapeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShapeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShapeQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useGetShapeQuery(baseOptions?: Apollo.QueryHookOptions<GetShapeQuery, GetShapeQueryVariables>) {
        return Apollo.useQuery<GetShapeQuery, GetShapeQueryVariables>(GetShapeDocument, baseOptions);
      }
export function useGetShapeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShapeQuery, GetShapeQueryVariables>) {
          return Apollo.useLazyQuery<GetShapeQuery, GetShapeQueryVariables>(GetShapeDocument, baseOptions);
        }
export type GetShapeQueryHookResult = ReturnType<typeof useGetShapeQuery>;
export type GetShapeLazyQueryHookResult = ReturnType<typeof useGetShapeLazyQuery>;
export type GetShapeQueryResult = Apollo.QueryResult<GetShapeQuery, GetShapeQueryVariables>;
export const GetShapesDocument = gql`
    query getShapes($canvasId: String!) {
  getShapes(canvasId: $canvasId) {
    ...ShapeFragment
  }
}
    ${ShapeFragmentFragmentDoc}`;

/**
 * __useGetShapesQuery__
 *
 * To run a query within a React component, call `useGetShapesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShapesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShapesQuery({
 *   variables: {
 *      canvasId: // value for 'canvasId'
 *   },
 * });
 */
export function useGetShapesQuery(baseOptions?: Apollo.QueryHookOptions<GetShapesQuery, GetShapesQueryVariables>) {
        return Apollo.useQuery<GetShapesQuery, GetShapesQueryVariables>(GetShapesDocument, baseOptions);
      }
export function useGetShapesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShapesQuery, GetShapesQueryVariables>) {
          return Apollo.useLazyQuery<GetShapesQuery, GetShapesQueryVariables>(GetShapesDocument, baseOptions);
        }
export type GetShapesQueryHookResult = ReturnType<typeof useGetShapesQuery>;
export type GetShapesLazyQueryHookResult = ReturnType<typeof useGetShapesLazyQuery>;
export type GetShapesQueryResult = Apollo.QueryResult<GetShapesQuery, GetShapesQueryVariables>;
export const IsLoginDocument = gql`
    query isLogin {
  isLogin
}
    `;

/**
 * __useIsLoginQuery__
 *
 * To run a query within a React component, call `useIsLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsLoginQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsLoginQuery(baseOptions?: Apollo.QueryHookOptions<IsLoginQuery, IsLoginQueryVariables>) {
        return Apollo.useQuery<IsLoginQuery, IsLoginQueryVariables>(IsLoginDocument, baseOptions);
      }
export function useIsLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsLoginQuery, IsLoginQueryVariables>) {
          return Apollo.useLazyQuery<IsLoginQuery, IsLoginQueryVariables>(IsLoginDocument, baseOptions);
        }
export type IsLoginQueryHookResult = ReturnType<typeof useIsLoginQuery>;
export type IsLoginLazyQueryHookResult = ReturnType<typeof useIsLoginLazyQuery>;
export type IsLoginQueryResult = Apollo.QueryResult<IsLoginQuery, IsLoginQueryVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const HelloSubscriptionDocument = gql`
    subscription helloSubscription {
  helloSubscription
}
    `;

/**
 * __useHelloSubscriptionSubscription__
 *
 * To run a query within a React component, call `useHelloSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useHelloSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useHelloSubscriptionSubscription(baseOptions?: Apollo.SubscriptionHookOptions<HelloSubscriptionSubscription, HelloSubscriptionSubscriptionVariables>) {
        return Apollo.useSubscription<HelloSubscriptionSubscription, HelloSubscriptionSubscriptionVariables>(HelloSubscriptionDocument, baseOptions);
      }
export type HelloSubscriptionSubscriptionHookResult = ReturnType<typeof useHelloSubscriptionSubscription>;
export type HelloSubscriptionSubscriptionResult = Apollo.SubscriptionResult<HelloSubscriptionSubscription>;