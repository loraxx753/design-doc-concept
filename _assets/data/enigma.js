export default new Proxy({
    collection: async function(id = null) {
        if(!id) {
            const url = `https://public.enigma.com/api/collections/`
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('apikey')}`
                }
            }).then(r => r.json())
            console.log(response)
        }
        return this
    }, 
    something: 'else'
}, {
    set: (target, key, value) => {
        target[name] = value;
    },
    get: (target, name) => {
        if(Object.keys(target).includes(name)) return target[name]
        // else console.error(`%c${name}`, "font-weight: bold;", ` doesn't exist as a key on`, target)
    }
})

export const saveData = (data) => {

}

export const models =  {
        collection: {
            "ancestors": [], 
            "created_at": "2018-06-27T17:28:19.895905+00:00", 
            "deletable": false, 
            "description": "Data sources that come from companies or commercial data.", 
            "description_short": "Data sources that come from companies or commercial data.", 
            "display_name": "Companies", 
            "editable": false, 
            "id": "5f8faa60-e6c3-4dc0-8eea-ade8c81d1265", 
            "key_value": {}, 
            "modified_at": "2018-06-27T17:28:19.895920+00:00", 
            "owner_id": null, 
            "parent_collection": null, 
            "published": true, 
            "tags": []
        },
        dataset:   {
            "ancestors": [
            {
                "created_at": "2018-06-27T18:14:48.771685+00:00", 
                "description": "Data concerning, or published by, the federal government of the United States of America.", 
                "description_short": "Data concerning, or published by, the federal government of the United States of America.", 
                "display_name": "United States", 
                "id": "41026df2-2db0-41b1-8d7f-5a6c8e34de62", 
                "key_value": {}, 
                "modified_at": "2018-06-27T18:14:48.771699+00:00", 
                "published": true
            }, 
            {
                "created_at": "2018-06-27T19:43:34.332712+00:00", 
                "description": "Government from the Legislative, Executive, and Judicial branches of the United States of America.", 
                "description_short": "Government comprising the Legislative, Executive, and Judicial branches of the United States of America.", 
                "display_name": "U.S. Federal Government", 
                "id": "bf068aa3-a15c-4db3-bdb1-6d51f91eae5a", 
                "key_value": {}, 
                "modified_at": "2018-06-27T19:43:34.332722+00:00", 
                "published": true
            }
            ], 
            "citation": "http://www2.census.gov/programs-surveys/acs/summary_file/2013/", 
            "created_at": "2016-07-14T00:26:31.533782+00:00", 
            "current_snapshot": {
            "created_at": "2016-07-14T00:26:31.533782+00:00", 
            "end_date": null, 
            "fields": [
                {
                "data_type": "string", 
                "description": "Area Name", 
                "display_name": "Area Name", 
                "is_serialid": false, 
                "name": "name", 
                "visible_by_default": true
                }, 
                {
                "data_type": "string", 
                "description": "Geographic Identifier", 
                "display_name": "Geographic Identifier", 
                "is_serialid": false, 
                "name": "geoid", 
                "visible_by_default": true
                }
            ], 
            "id": "693b2742-4648-4bfb-b599-104c97820cfb", 
            "ingest_status": {
                "state": "SUCCESS", 
                "timestamp": "2018-07-02T07:55:53.760634"
            }, 
            "record_start_date": "2016-07-14T00:26:31.533782+00:00", 
            "row_count": 444567, 
            "size": 107528192, 
            "start_date": null
            }, 
            "data_updated_at": "2016-07-14T00:26:31.533782+00:00", 
            "deletable": false, 
            "dependencies": [], 
            "derivatives": [], 
            "description": "Table ID: B11002I. Universe: Population in households with a householder who is Hispanic or Latino. Universe indicates the demographic group captured by the table's estimations. The table may contain empty rows if estimations for this topic are not released on the Census tract or block group level.", 
            "description_short": "Table ID: B11002I. Universe: Population in households with a householder who is Hispanic or Latino.", 
            "display_name": "Household type by relatives and nonrelatives for population in households Hispanic or Latino", 
            "editable": false, 
            "extraction_type": null, 
            "id": "0000aa2f-d545-45ce-9520-c8e50bfd0688", 
            "key_value": {}, 
            "modified_at": "2018-08-07T05:08:24.216182+00:00", 
            "one_time_ingestion": null, 
            "owner_id": null, 
            "parent_collection": {
            "id": "0ecdcade-a9fb-4ab3-8c2b-05550556f26d"
            }, 
            "published": true, 
            "resource_owner": null, 
            "resource_owner_contact": null, 
            "schema_updated_at": "2017-06-30T03:47:54.242288+00:00", 
            "source_description": null, 
            "source_lag_time": {
            "unit": null, 
            "value": null
            }, 
            "source_type": null, 
            "source_update_schedule": {
            "unit": null, 
            "value": null
            }, 
            "tags": [], 
            "technical_owner": null, 
            "technical_owner_contact": null, 
            "terms_of_service": null
        },
        personalCollection: {
            "bookmarks": [
                {
                    "collection": {
                        "description": "string",
                        "description_short": "string",
                        "display_name": "string",
                        "id": "string",
                        "published": true
                    },
                    "dataset": {
                        "description": "string",
                        "description_short": "string",
                        "display_name": "string",
                        "id": "string",
                        "published": true
                    }
                }
            ],
            "description": "string",
            "display_name": "string",
            "id": "string"
        },
        snapshot: {},
        tags:     {
            "created_at": "2017-12-19T04:54:53.652491+00:00",
            "id": 1,
            "name": "agriculture"
        }
    }


  




// (() => { return {
//   something: "else"  
// }})()






// const staff = {
//     name: "Jane Doe",
//     age: 25
// }
// const handler = {
//     get: (target, name) => {
//         name in target ? console.log(target[name]) : console.log('404 not found');
//     },
//     set: (target, name, value) => {
//         target[name] = value;
//     }
// }
// const staffProxy = new Proxy(staff, handler);
// staffProxy.name // => "Jane Doe"
// staffProxy.age // => 25
// staffProxy.age = 30
// staffProxy.age // => 30
// staffProxy.position // => '404 not found'