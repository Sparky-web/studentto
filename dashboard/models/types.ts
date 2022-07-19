export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};




export type Pagination = {
  __typename?: 'Pagination';
  total: Scalars['Int'];
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  pageCount: Scalars['Int'];
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type IdFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['ID']>>>;
  or?: Maybe<Array<Maybe<Scalars['ID']>>>;
  not?: Maybe<IdFilterInput>;
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  startsWith?: Maybe<Scalars['ID']>;
  endsWith?: Maybe<Scalars['ID']>;
  contains?: Maybe<Scalars['ID']>;
  notContains?: Maybe<Scalars['ID']>;
  containsi?: Maybe<Scalars['ID']>;
  notContainsi?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  between?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type BooleanFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  or?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  not?: Maybe<BooleanFilterInput>;
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  startsWith?: Maybe<Scalars['Boolean']>;
  endsWith?: Maybe<Scalars['Boolean']>;
  contains?: Maybe<Scalars['Boolean']>;
  notContains?: Maybe<Scalars['Boolean']>;
  containsi?: Maybe<Scalars['Boolean']>;
  notContainsi?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  between?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type StringFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['String']>>>;
  or?: Maybe<Array<Maybe<Scalars['String']>>>;
  not?: Maybe<StringFilterInput>;
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
  containsi?: Maybe<Scalars['String']>;
  notContainsi?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IntFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['Int']>>>;
  or?: Maybe<Array<Maybe<Scalars['Int']>>>;
  not?: Maybe<IntFilterInput>;
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  startsWith?: Maybe<Scalars['Int']>;
  endsWith?: Maybe<Scalars['Int']>;
  contains?: Maybe<Scalars['Int']>;
  notContains?: Maybe<Scalars['Int']>;
  containsi?: Maybe<Scalars['Int']>;
  notContainsi?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FloatFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['Float']>>>;
  or?: Maybe<Array<Maybe<Scalars['Float']>>>;
  not?: Maybe<FloatFilterInput>;
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  startsWith?: Maybe<Scalars['Float']>;
  endsWith?: Maybe<Scalars['Float']>;
  contains?: Maybe<Scalars['Float']>;
  notContains?: Maybe<Scalars['Float']>;
  containsi?: Maybe<Scalars['Float']>;
  notContainsi?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
  between?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DateTimeFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  or?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  not?: Maybe<DateTimeFilterInput>;
  eq?: Maybe<Scalars['DateTime']>;
  ne?: Maybe<Scalars['DateTime']>;
  startsWith?: Maybe<Scalars['DateTime']>;
  endsWith?: Maybe<Scalars['DateTime']>;
  contains?: Maybe<Scalars['DateTime']>;
  notContains?: Maybe<Scalars['DateTime']>;
  containsi?: Maybe<Scalars['DateTime']>;
  notContainsi?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  between?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type JsonFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  or?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  not?: Maybe<JsonFilterInput>;
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  startsWith?: Maybe<Scalars['JSON']>;
  endsWith?: Maybe<Scalars['JSON']>;
  contains?: Maybe<Scalars['JSON']>;
  notContains?: Maybe<Scalars['JSON']>;
  containsi?: Maybe<Scalars['JSON']>;
  notContainsi?: Maybe<Scalars['JSON']>;
  gt?: Maybe<Scalars['JSON']>;
  gte?: Maybe<Scalars['JSON']>;
  lt?: Maybe<Scalars['JSON']>;
  lte?: Maybe<Scalars['JSON']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  between?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};

export type UploadFileFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  alternativeText?: Maybe<StringFilterInput>;
  caption?: Maybe<StringFilterInput>;
  width?: Maybe<IntFilterInput>;
  height?: Maybe<IntFilterInput>;
  formats?: Maybe<JsonFilterInput>;
  hash?: Maybe<StringFilterInput>;
  ext?: Maybe<StringFilterInput>;
  mime?: Maybe<StringFilterInput>;
  size?: Maybe<FloatFilterInput>;
  url?: Maybe<StringFilterInput>;
  previewUrl?: Maybe<StringFilterInput>;
  provider?: Maybe<StringFilterInput>;
  provider_metadata?: Maybe<JsonFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UploadFileFiltersInput>>>;
  or?: Maybe<Array<Maybe<UploadFileFiltersInput>>>;
  not?: Maybe<UploadFileFiltersInput>;
};

export type UploadFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UploadFile>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  code?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<I18NLocaleFiltersInput>>>;
  or?: Maybe<Array<Maybe<I18NLocaleFiltersInput>>>;
  not?: Maybe<I18NLocaleFiltersInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<I18NLocale>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsPermissionFiltersInput = {
  id?: Maybe<IdFilterInput>;
  action?: Maybe<StringFilterInput>;
  role?: Maybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsPermissionFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsPermissionFiltersInput>>>;
  not?: Maybe<UsersPermissionsPermissionFiltersInput>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsPermission>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRoleFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  description?: Maybe<StringFilterInput>;
  type?: Maybe<StringFilterInput>;
  permissions?: Maybe<UsersPermissionsPermissionFiltersInput>;
  users?: Maybe<UsersPermissionsUserFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsRoleFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsRoleFiltersInput>>>;
  not?: Maybe<UsersPermissionsRoleFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: Maybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: Maybe<UsersPermissionsUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  id?: Maybe<IdFilterInput>;
  username?: Maybe<StringFilterInput>;
  email?: Maybe<StringFilterInput>;
  provider?: Maybe<StringFilterInput>;
  password?: Maybe<StringFilterInput>;
  resetPasswordToken?: Maybe<StringFilterInput>;
  confirmationToken?: Maybe<StringFilterInput>;
  confirmed?: Maybe<BooleanFilterInput>;
  blocked?: Maybe<BooleanFilterInput>;
  role?: Maybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsUserFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsUserFiltersInput>>>;
  not?: Maybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type AppGroupFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  app_users?: Maybe<AppUserFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  publishedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<AppGroupFiltersInput>>>;
  or?: Maybe<Array<Maybe<AppGroupFiltersInput>>>;
  not?: Maybe<AppGroupFiltersInput>;
};

export type AppGroupInput = {
  name?: Maybe<Scalars['String']>;
  app_users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type AppGroup = {
  __typename?: 'AppGroup';
  name?: Maybe<Scalars['String']>;
  app_users?: Maybe<AppUserRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type AppGroupApp_UsersArgs = {
  filters?: Maybe<AppUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppGroupEntity = {
  __typename?: 'AppGroupEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<AppGroup>;
};

export type AppGroupEntityResponse = {
  __typename?: 'AppGroupEntityResponse';
  data?: Maybe<AppGroupEntity>;
};

export type AppGroupEntityResponseCollection = {
  __typename?: 'AppGroupEntityResponseCollection';
  data: Array<AppGroupEntity>;
  meta: ResponseCollectionMeta;
};

export type AppRoleFiltersInput = {
  id?: Maybe<IdFilterInput>;
  role?: Maybe<StringFilterInput>;
  app_users?: Maybe<AppUserFiltersInput>;
  permissions?: Maybe<JsonFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<AppRoleFiltersInput>>>;
  or?: Maybe<Array<Maybe<AppRoleFiltersInput>>>;
  not?: Maybe<AppRoleFiltersInput>;
};

export type AppRoleInput = {
  role?: Maybe<Scalars['String']>;
  app_users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  permissions?: Maybe<Scalars['JSON']>;
};

export type AppRole = {
  __typename?: 'AppRole';
  role?: Maybe<Scalars['String']>;
  app_users?: Maybe<AppUserRelationResponseCollection>;
  permissions?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AppRoleApp_UsersArgs = {
  filters?: Maybe<AppUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppRoleEntity = {
  __typename?: 'AppRoleEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<AppRole>;
};

export type AppRoleEntityResponse = {
  __typename?: 'AppRoleEntityResponse';
  data?: Maybe<AppRoleEntity>;
};

export type AppRoleEntityResponseCollection = {
  __typename?: 'AppRoleEntityResponseCollection';
  data: Array<AppRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type AppUniversityFiltersInput = {
  id?: Maybe<IdFilterInput>;
  university?: Maybe<StringFilterInput>;
  users?: Maybe<AppUserFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  publishedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<AppUniversityFiltersInput>>>;
  or?: Maybe<Array<Maybe<AppUniversityFiltersInput>>>;
  not?: Maybe<AppUniversityFiltersInput>;
};

export type AppUniversityInput = {
  university?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type AppUniversity = {
  __typename?: 'AppUniversity';
  university?: Maybe<Scalars['String']>;
  users?: Maybe<AppUserRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type AppUniversityUsersArgs = {
  filters?: Maybe<AppUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppUniversityEntity = {
  __typename?: 'AppUniversityEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<AppUniversity>;
};

export type AppUniversityEntityResponse = {
  __typename?: 'AppUniversityEntityResponse';
  data?: Maybe<AppUniversityEntity>;
};

export type AppUniversityEntityResponseCollection = {
  __typename?: 'AppUniversityEntityResponseCollection';
  data: Array<AppUniversityEntity>;
  meta: ResponseCollectionMeta;
};

export type AppUserFiltersInput = {
  id?: Maybe<IdFilterInput>;
  username?: Maybe<StringFilterInput>;
  firstName?: Maybe<StringFilterInput>;
  lastName?: Maybe<StringFilterInput>;
  middleName?: Maybe<StringFilterInput>;
  app_role?: Maybe<AppRoleFiltersInput>;
  group?: Maybe<AppGroupFiltersInput>;
  university?: Maybe<AppUniversityFiltersInput>;
  password?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<AppUserFiltersInput>>>;
  or?: Maybe<Array<Maybe<AppUserFiltersInput>>>;
  not?: Maybe<AppUserFiltersInput>;
};

export type AppUserInput = {
  username?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  app_role?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
  university?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
};

export type AppUser = {
  __typename?: 'AppUser';
  username?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  app_role?: Maybe<AppRoleEntityResponse>;
  group?: Maybe<AppGroupEntityResponse>;
  university?: Maybe<AppUniversityEntityResponse>;
  password?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AppUserEntity = {
  __typename?: 'AppUserEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<AppUser>;
};

export type AppUserEntityResponse = {
  __typename?: 'AppUserEntityResponse';
  data?: Maybe<AppUserEntity>;
};

export type AppUserEntityResponseCollection = {
  __typename?: 'AppUserEntityResponseCollection';
  data: Array<AppUserEntity>;
  meta: ResponseCollectionMeta;
};

export type AppUserRelationResponseCollection = {
  __typename?: 'AppUserRelationResponseCollection';
  data: Array<AppUserEntity>;
};

export type LessonFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  group?: Maybe<AppGroupFiltersInput>;
  from?: Maybe<DateTimeFilterInput>;
  to?: Maybe<DateTimeFilterInput>;
  teacher?: Maybe<AppUserFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  publishedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<LessonFiltersInput>>>;
  or?: Maybe<Array<Maybe<LessonFiltersInput>>>;
  not?: Maybe<LessonFiltersInput>;
};

export type LessonInput = {
  name?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['ID']>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  teacher?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type Lesson = {
  __typename?: 'Lesson';
  name?: Maybe<Scalars['String']>;
  group?: Maybe<AppGroupEntityResponse>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  teacher?: Maybe<AppUserEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type LessonEntity = {
  __typename?: 'LessonEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Lesson>;
};

export type LessonEntityResponse = {
  __typename?: 'LessonEntityResponse';
  data?: Maybe<LessonEntity>;
};

export type LessonEntityResponseCollection = {
  __typename?: 'LessonEntityResponseCollection';
  data: Array<LessonEntity>;
  meta: ResponseCollectionMeta;
};

export type GenericMorph = UploadFile | I18NLocale | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | AppGroup | AppRole | AppUniversity | AppUser | Lesson;

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type PaginationArg = {
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  appGroup?: Maybe<AppGroupEntityResponse>;
  appGroups?: Maybe<AppGroupEntityResponseCollection>;
  appRole?: Maybe<AppRoleEntityResponse>;
  appRoles?: Maybe<AppRoleEntityResponseCollection>;
  appUniversity?: Maybe<AppUniversityEntityResponse>;
  appUniversities?: Maybe<AppUniversityEntityResponseCollection>;
  appUser?: Maybe<AppUserEntityResponse>;
  appUsers?: Maybe<AppUserEntityResponseCollection>;
  lesson?: Maybe<LessonEntityResponse>;
  lessons?: Maybe<LessonEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryUploadFileArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: Maybe<UploadFileFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: Maybe<I18NLocaleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: Maybe<UsersPermissionsRoleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: Maybe<UsersPermissionsUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAppGroupArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryAppGroupsArgs = {
  filters?: Maybe<AppGroupFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryAppRoleArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryAppRolesArgs = {
  filters?: Maybe<AppRoleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAppUniversityArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryAppUniversitiesArgs = {
  filters?: Maybe<AppUniversityFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryAppUserArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryAppUsersArgs = {
  filters?: Maybe<AppUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryLessonArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryLessonsArgs = {
  filters?: Maybe<LessonFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  createAppGroup?: Maybe<AppGroupEntityResponse>;
  updateAppGroup?: Maybe<AppGroupEntityResponse>;
  deleteAppGroup?: Maybe<AppGroupEntityResponse>;
  createAppRole?: Maybe<AppRoleEntityResponse>;
  updateAppRole?: Maybe<AppRoleEntityResponse>;
  deleteAppRole?: Maybe<AppRoleEntityResponse>;
  createAppUniversity?: Maybe<AppUniversityEntityResponse>;
  updateAppUniversity?: Maybe<AppUniversityEntityResponse>;
  deleteAppUniversity?: Maybe<AppUniversityEntityResponse>;
  createAppUser?: Maybe<AppUserEntityResponse>;
  updateAppUser?: Maybe<AppUserEntityResponse>;
  deleteAppUser?: Maybe<AppUserEntityResponse>;
  createLesson?: Maybe<LessonEntityResponse>;
  updateLesson?: Maybe<LessonEntityResponse>;
  deleteLesson?: Maybe<LessonEntityResponse>;
  upload: UploadFileEntityResponse;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  updateFileInfo: UploadFileEntityResponse;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID'];
  data: UploadFileInput;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAppGroupArgs = {
  data: AppGroupInput;
};


export type MutationUpdateAppGroupArgs = {
  id: Scalars['ID'];
  data: AppGroupInput;
};


export type MutationDeleteAppGroupArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAppRoleArgs = {
  data: AppRoleInput;
};


export type MutationUpdateAppRoleArgs = {
  id: Scalars['ID'];
  data: AppRoleInput;
};


export type MutationDeleteAppRoleArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAppUniversityArgs = {
  data: AppUniversityInput;
};


export type MutationUpdateAppUniversityArgs = {
  id: Scalars['ID'];
  data: AppUniversityInput;
};


export type MutationDeleteAppUniversityArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAppUserArgs = {
  data: AppUserInput;
};


export type MutationUpdateAppUserArgs = {
  id: Scalars['ID'];
  data: AppUserInput;
};


export type MutationDeleteAppUserArgs = {
  id: Scalars['ID'];
};


export type MutationCreateLessonArgs = {
  data: LessonInput;
};


export type MutationUpdateLessonArgs = {
  id: Scalars['ID'];
  data: LessonInput;
};


export type MutationDeleteLessonArgs = {
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: Maybe<FileInfoInput>;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
  data: UsersPermissionsRoleInput;
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationUpdateUsersPermissionsUserArgs = {
  id: Scalars['ID'];
  data: UsersPermissionsUserInput;
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};
