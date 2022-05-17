from pydantic import BaseModel


class ReqBody(BaseModel):
    policy_id: str
    date_of_Purchase: str
    customer_id: str
    fuel: str
    vehicle_segment: str
    premium: str
    bodily_injury_liability: str
    personal_injury_protection: str
    property_damage_liability: str
    collision: str
    comprehensive: str
    customer_gender: str
    customer_income_group: str
    customer_region: str
    customer_marital_status: str
