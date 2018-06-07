Specification of REST routes.

#### List of endpoints:

- **GET** `/query/playground` - (GraphQL playground + documentation)
- **POST** `/query` - (GraphQL endpoint)

#### Query endpoint data:

Takes a JSON body on request. Such JSON body is made of:

```json
{
  "query": "<GraphQL query/mutation request here>",
  "variables": {
    "x": 5,
    "y": "<anything here which pass the GraphQL input type checking>"
  }
}
```
