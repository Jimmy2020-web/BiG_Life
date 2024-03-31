var url = 'https://script.google.com/macros/s/AKfycbx_p6asLE8RR0U5TT3UAu4dMdbs2UcEZUpjN-mJ_rvipmno2m9DmKkFPwNEm79-Xe77/exec';

function checkDatabase() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const getData = data.data;
              
            if (getData && getData.length > 0) {
                console.log('Database has data');
            } else {
                console.log('Database is empty');
                sendFormData();
            }
        })
        .catch(error => console.error('Error checking database:', error));
};

checkDatabase();