# Database Design

## Tables

- Airline
- Flights
- Airport
- City

### Airline Table

- id
- model_number
- capacity
- created_at
- updated_at

### Flights Table

- id
- src_airport_id (or departure_city_id)
- dest_airport_id (or destination_city_id)
- airplane_id
- airport_id
- departure (time and date both)
- arrival (time and date both)
- Fligth number

### Airport Table

- id
- name
- city_id
- address

### City Table

- id
- name

## Relations Between Tables

- `one-to-many` between Airplane (1) to Flights (N) -> `1:N` (A flight belongs to an airplane but one airplane can be used in multiple flights)
- `one-to-many` between City (1) to Airport (N) -> `1:N` (City has many airports but one airport belongs to one city)
- `one-to-many` between Airport (1) to Flights (N) -> `1:N` (One airport can be the departure or arrival point for many flights, but each flight has exactly one departure airport and one arrival airport)
