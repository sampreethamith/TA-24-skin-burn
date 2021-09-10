import json


    # {
    #     "id": 833,
    #     "name": "Ḩeşār-e Sefīd",
    #     "state": "",
    #     "country": "IR",
    #     "coord": {
    #         "lon": 47.159401,
    #         "lat": 34.330502
    #     }
    # },

    # {
    #     "type": "Feature",
    #     "geometry":
    #     {
    #         "type": "Polygon",
    #         "coordinates": [[[149.11516334, -35.31860619], [149.12137948, -35.31161585], [149.12862742, -35.31068372], [149.13543437, -35.3161087], [149.12675945, -35.32256967], [149.11516334, -35.31860619]]]
    #     },
    #     "properties":
    #     {
    #         "lc_ply_pid": 16479,
    #         "dt_create":
    #         "2017-09-12Z",
    #         "dt_retire": null,
    #         "loc_pid": "ACT216",
    #         "act_locali": "2017-10-03Z",
    #         "act_loca_1": null,
    #         "act_loca_2": "FORREST",
    #         "act_loca_3": null,
    #         "act_loca_4": null,
    #         "act_loca_5": "G",
    #         "act_loca_6": null,
    #         "act_loca_7": 8
    #     },
    #         "id": "ckan_0257a9da_b558_4d86_a987_535c775cf8d8.1"
    # }

def city_filter():
    ow_au_data = json.load(open("ow_au_data.json", encoding='utf-8'))
    open_au_data = json.load(
        open("australian-suburbs.geojson", encoding='utf-8'))

    city_with_geo = dict()

    print(f"total: {len(ow_au_data)}")
    for open_city in open_au_data['features']:
        if(len(ow_au_data) <= 0):
            break
        for ow_city in list(ow_au_data):
            # ''.join([c for c in open_city['properties']['loc_pid'].split() if not c.isdigit()])
            city_key = open_city['properties']['loc_pid'].rstrip('0123456789')
            city_key = f"{city_key.lower()}_loca_2" if len(
                city_key) == 3 else f"{city_key.lower()}_local_2"
            if open_city['properties'][city_key].lower() == ow_city['name'].lower():
                city_with_geo[ow_city['name']] = {
                    'id': ow_city['id'],
                    'type': open_city['type'],
                    'geometry': open_city['geometry'],
                    'properties': {
                        'name': ow_city['name'],
                        'coord': ow_city['coord'],
                        'uvi': -1
                    }
                }
                ow_au_data.remove(ow_city)

    print(f'processed: {len(city_with_geo)}')
    with open('city_with_geo.json', 'w', encoding='utf-8') as f:
        json.dump(city_with_geo, f, ensure_ascii=False, indent=4)

    print(f"remaining: {len(ow_au_data)}")
    with open('remaining.json', 'w', encoding='utf-8') as f:
        json.dump(ow_au_data, f, ensure_ascii=False, indent=4)


def state_filter():
    open_ow_data = json.load(
        open("australian-states.json", encoding='utf-8'))

    state_with_geo = dict()

    print(f"total: {len(open_ow_data['features'])}")
    for state in open_ow_data['features']:
        state_with_geo[state['properties']['state_name']] = state

    print(f"processed: {len(state_with_geo)}")
    with open('state_with_geo.json', 'w', encoding='utf-8') as f:
        json.dump(state_with_geo, f, ensure_ascii=False, indent=4)


def city_for_fe():
    ow_cities = json.load(
        open("city_with_geo.json", encoding='utf-8'))
    
    city_list = list(ow_cities.keys())
    with open('city_list.json', 'w', encoding='utf-8') as f:
        json.dump(city_list, f, ensure_ascii=False, indent=4)

def modify_cities():
    ow_cities = json.load(
        open("city_with_geo.json", encoding='utf-8'))

    new_dic = {}
    for name, item in ow_cities.items():
        del item['properties']['time']
        item['properties']['name'] = item['properties']['name'].lower()
        new_dic[name.lower()] = item

    with open('city_with_geo.json', 'w', encoding='utf-8') as f:
        json.dump(new_dic, f, ensure_ascii=False, indent=4)

def modify_states():
    ow_states = json.load(
        open("state_with_geo.json", encoding='utf-8'))
    
    new_dic = {}
    for name, item in ow_states.items():
        item['properties']['name'] = item['properties']['name'].lower()
        new_dic[name.lower()] = item
        
    with open('state_with_geo.json', 'w', encoding='utf-8') as f:
        json.dump(new_dic, f, ensure_ascii=False, indent=4)

# city_filter()
# state_filter()
# city_for_fe()
# modify_cities()
modify_states()