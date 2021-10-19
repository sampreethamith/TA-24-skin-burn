import json
import os

here = os.path.dirname(os.path.abspath(__file__))
input_filename = os.path.join(here, "state_month_uv.json")
output_filename = os.path.join(here, "state_month_uv_modified.json")

def modify_state_json():
    def modify_first_value(item, code):
        for i in range(0, len(item)):
            item[i][0] = f"{code}_{item[i][0]}"
        return item
    with open(input_filename, "r") as read_json:
        read_dict: dict = json.loads(read_json.read())
        for key, value in read_dict.items():
            read_dict[key] = modify_first_value(
                value, 
                "SA" if key == "SOUTH AUSTRALIA" else 
                "QLD" if key == "QUEENSLAND" else
                "ACT" if key == "AUSTRALIAN CAPITAL TERRITORY" else
                "NT" if key == "NORTHERN TERRITORY" else
                "WA" if key == "WESTERN AUSTRALIA" else
                "NSW" if key == "NEW SOUTH WALES" else
                key[0:3]
                )
        with open(output_filename, "w") as write_json:
            write_json.write(json.dumps(read_dict))


modify_state_json()
