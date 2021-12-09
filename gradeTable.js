const gradesFor40Pt=
[   
    {min:40, grade:"10"},
    {min:39, grade:"10-"},
    {min:38, grade:"9½"},
    {min:37, grade:"9+"},
    {min:36, grade:"9"},
    {min:35, grade:"9-"},
    {min:34, grade:"8½"},
    {min:33, grade:"8+"},
    {min:32, grade:"8"},
    {min:31, grade:"8-"},
    {min:29, grade:"7½"},
    {min:28, grade:"7+"},
    {min:26, grade:"7"},
    {min:24, grade:"7-"},
    {min:22, grade:"6½"},
    {min:20, grade:"6+"},
    {min:18, grade:"6"},
    {min:16, grade:"6-"},
    {min:13, grade:"5½"},
    {min:11, grade:"5+"},
    {min:8, grade:"5"},
    {min:7, grade:"5-"},
    {min:5, grade:"4½"},
    {min:4, grade:"4+"},
    {min:0, grade:"4"}
];

const gradesFor60Pt=
[   
    {min:60, grade:"10"},
    {min:59, grade:"10-"},
    {min:57, grade:"9½"},
    {min:56, grade:"9+"},
    {min:54, grade:"9"},
    {min:53, grade:"9-"},
    {min:51, grade:"8½"},
    {min:50, grade:"8+"},
    {min:48, grade:"8"},
    {min:46, grade:"8-"},
    {min:44, grade:"7½"},
    {min:42, grade:"7+"},
    {min:39, grade:"7"},
    {min:37, grade:"7-"},
    {min:34, grade:"6½"},
    {min:31, grade:"6+"},
    {min:27, grade:"6"},
    {min:24, grade:"6-"},
    {min:20, grade:"5½"},
    {min:16, grade:"5+"},
    {min:12, grade:"5"},
    {min:10, grade:"5-"},
    {min:8, grade:"4½"},
    {min:5, grade:"4+"},
    {min:0, grade:"4"}
];

const gradesFor70Pt=
[   
    {min:70, grade:"10"},
    {min:69, grade:"10-"},
    {min:67, grade:"9½"},
    {min:65, grade:"9+"},
    {min:63, grade:"9"},
    {min:61, grade:"9-"},
    {min:59, grade:"8½"},
    {min:58, grade:"8+"},
    {min:56, grade:"8"},
    {min:54, grade:"8-"},
    {min:51, grade:"7½"},
    {min:49, grade:"7+"},
    {min:46, grade:"7"},
    {min:43, grade:"7-"},
    {min:39, grade:"6½"},
    {min:36, grade:"6+"},
    {min:32, grade:"6"},
    {min:28, grade:"6-"},
    {min:24, grade:"5½"},
    {min:19, grade:"5+"},
    {min:14, grade:"5"},
    {min:12, grade:"5-"},
    {min:9, grade:"4½"},
    {min:6, grade:"4+"},
    {min:0, grade:"4"}
];

const gradesFor100Pt=
[   
    {min:99, grade:"10"},
    {min:97, grade:"10-"},
    {min:95, grade:"9½"},
    {min:93, grade:"9+"},
    {min:90, grade:"9"},
    {min:87, grade:"9-"},
    {min:85, grade:"8½"},
    {min:83, grade:"8+"},
    {min:80, grade:"8"},
    {min:76, grade:"8-"},
    {min:72, grade:"7½"},
    {min:69, grade:"7+"},
    {min:65, grade:"7"},
    {min:60, grade:"7-"},
    {min:55, grade:"6½"},
    {min:50, grade:"6+"},
    {min:45, grade:"6"},
    {min:39, grade:"6-"},
    {min:33, grade:"5½"},
    {min:27, grade:"5+"},
    {min:20, grade:"5"},
    {min:17, grade:"5-"},
    {min:13, grade:"4½"},
    {min:9, grade:"4+"},
    {min:0, grade:"4"}
];


const gradesFor150Pt=
[   
    {min:148, grade:"10"},
    {min:145, grade:"10-"},
    {min:142, grade:"9½"},
    {min:139, grade:"9+"},
    {min:135, grade:"9"},
    {min:130, grade:"9-"},
    {min:128, grade:"8½"},
    {min:124, grade:"8+"},
    {min:120, grade:"8"},
    {min:115, grade:"8-"},
    {min:109, grade:"7½"},
    {min:104, grade:"7+"},
    {min:98, grade:"7"},
    {min:91, grade:"7-"},
    {min:83, grade:"6½"},
    {min:76, grade:"6+"},
    {min:68, grade:"6"},
    {min:59, grade:"6-"},
    {min:49, grade:"5½"},
    {min:40, grade:"5+"},
    {min:30, grade:"5"},
    {min:26, grade:"5-"},
    {min:20, grade:"4½"},
    {min:14, grade:"4+"},
    {min:0, grade:"4"}
];

function pickReferenceTable(maxPt)
{
    if(maxPt <= 50)
    {
        return {table:gradesFor40Pt, ref:40};
    }
    else if(maxPt <= 65)
    {
        return {table:gradesFor60Pt, ref:60};
    }
    else if(maxPt <= 85)
    {
        return {table:gradesFor70Pt, ref:70};
    }
    else if(maxPt <= 120)
    {
        return {table:gradesFor100Pt, ref:100};
    }
    else
    {
        return {table:gradesFor150Pt, ref:150};
    }
}
