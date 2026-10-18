# API Integration — RentNest Frontend

Base URL env var: `BACKEND_API_URL`

---

## Authentication

| Frontend File | Endpoint | Method |
|---|---|---|
| `app/(authGroup)/_actions/loginAction.ts` | `/api/auth/login` | POST |
| `app/(authGroup)/_actions/registerAction.ts` | `/api/auth/register` | POST |
| `service/getMe.ts` | `/api/auth/me` | GET |

---

## Public API

| Frontend File | Endpoint | Method |
|---|---|---|
| `service/category/getAllCategory.ts` | `/api/categories` | GET |
| `app/(publicGroup)/_actions/getPropertiesByCategory.ts` | `/api/categories` | GET |
| `app/(publicGroup)/_actions/getPropertiesForHome.ts` | `/api/properties?take=3` | GET |
| `app/(publicGroup)/properties/_actionProperties/getProperties.ts` | `/api/properties?<query>` | GET |
| `app/(publicGroup)/properties/_actionProperties/getSingleProperty.ts` | `/api/properties/:id` | GET |

---

## Tenant Dashboard API

| Frontend File | Endpoint | Method |
|---|---|---|
| `app/(publicGroup)/_actions/handleRequestDialogForm.ts` | `/api/rentals` | POST |
| `service/request/getRequest.ts` | `/api/rentals` | GET |
| `service/payment/createAPayment.ts` | `/api/payments/create` | POST |
| `service/payment/getOwnPayments.ts` | `/api/payments/me` | GET |

---

## Landlord Dashboard API

| Frontend File | Endpoint | Method |
|---|---|---|
| `service/properties/getLandlordProperties.ts` | `/api/landlord/properties` | GET |
| `app/(dashbordGroup)/landlord-dashboard/my-properties/_actions/propertyCreateAction.ts` | `/api/landlord/properties` | POST |
| `app/(dashbordGroup)/landlord-dashboard/my-properties/_actions/propertyEditAction.ts` | `/api/landlord/properties/:id` | PUT |
| `app/(dashbordGroup)/landlord-dashboard/my-properties/_actions/propertyDeleteAction.ts` | `/api/landlord/properties/:id` | DELETE |
| `service/my-property/getSingleProperty.ts` | `/api/properties/:id` | GET |
| `service/properties/getAllRequestOfLandlordProperty.ts` | `/api/landlord/requests` | GET |
| `app/(dashbordGroup)/landlord-dashboard/incoming-request/_action/statusChangedAction.ts` | `/api/landlord/requests/:id` | PATCH |

---

## Admin Dashboard API

| Frontend File | Endpoint | Method |
|---|---|---|
| `service/admin/getAllUsersByAdmin.ts` | `/api/admin/users` | GET |
| `app/(dashbordGroup)/admin-dashboard/users/_actions/updateUserStatus.ts` | `/api/admin/users/:id` | PATCH |
| `service/admin/getAllPropertiesByAdmin.ts` | `/api/admin/properties` | GET |
| `service/admin/getAllRentalRequestByAdmin.ts` | `/api/admin/rentals` | GET |
| `app/(dashbordGroup)/admin-dashboard/categories/_actions/categoryCreateAction.ts` | `/api/categories` | POST |

---

## Other

| Frontend File | Endpoint | Method |
|---|---|---|
| `service/logOut.ts` | — (no API call, clears cookies) | — |