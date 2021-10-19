import pyowm

# sam key: af0cfc6611defe4fe50200aec8c78d50
openweather_appid_sam = 'af0cfc6611defe4fe50200aec8c78d50'
openweather_appid_vivek = 'af0cfc6611defe4fe50200aec8c78d50'
CURRENT_DATA = 'current'
MINUTE_DATA = 'minutely'
HOUR_DATA = 'hourly'
DAILY_DATA = 'daily'
ALERT_DATA = 'alerts'
UNIT = 'metric'

def get_owm():
    return pyowm.OWM(openweather_appid_vivek)

def get_city_by_loc(lat, lon):
    data = get_owm().geocoding_manager().reverse_geocode(lat, lon, limit=1)
    if len(data) > 0:
        return data[0].name
    return ''

def get_uvi_by_loc(lat, lon):
    data = one_call(lat, lon, {CURRENT_DATA}).current
    if data != None:
        return data.uvi
    else:
        return -1

def one_call(lat, lon, includes: set):
    owm = pyowm.OWM(openweather_appid_vivek)
    mgr = owm.weather_manager()
    excludes = {CURRENT_DATA, MINUTE_DATA, HOUR_DATA, DAILY_DATA, ALERT_DATA} - includes
    one_call = mgr.one_call(lat, lon, exclude=','.join(excludes), units=UNIT)
    return one_call


def set_error_msg(response_obj, message):
    return {
        'statusCode': 500,
        'headers': response_obj['headers'],
        'body': {
            'msg': message
        }
    }


def lambda_handler(event, context):
    print(event)
    if 'loc' in event:
        return {'name': get_city_by_loc(event['loc']['lat'], event['loc']['lon'])}
    elif 'lat' in event and 'lon' in event:
        return {'uvi': get_uvi_by_loc(event['lat'], event['lon'])}
    else:
        return {}

# print(get_uvi_by_loc(-37.866669, 144.666672))