import React from 'react';

const LangButton = ({lang, langChange}) => {
    return (
        <div className='lang-btns'>
            <div className='svg-lang'>
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path id='svg-1' d="m341 452 80 60v-60h91v-271h-181v-181h-331v271h91v60l80-60h10v181zm141-30h-91v30l-40-30h-140v-211h271zm-321-181-40 30v-30h-91v-211h271v151h-65.730469l-69.269531-138.539062-73.417969 146.832031 26.832031 13.417969 18.355469-36.710938h56.460938l7.5 15h-20.730469v60zm18.230469-105h-26.460938l13.230469-26.460938zm0 0"/>
                    <path id='svg-2' d="m324.964844 340.40625c-16.085938 13.546875-31.273438 20.59375-38.964844 20.59375v30c19.328125 0 42.546875-14.144531 60-29.132812 17.453125 14.988281 40.671875 29.132812 60 29.132812v-30c-7.691406 0-22.878906-7.046875-38.964844-20.59375 8.710938-10.589844 17.875-24.453125 21.878906-39.40625h32.085938v-30h-60v-30h-30v30h-60v30h32.085938c4.003906 14.953125 13.167968 28.816406 21.878906 39.40625zm21.035156-21.691406c-4.730469-6.085938-8.496094-12.121094-11.070312-17.726563h22.140624c-2.574218 5.605469-6.339843 11.640625-11.070312 17.726563zm0 0"/>
                </svg>
            </div>
            <button className={lang === "EN" ? 'btn-lang--active btn-en' : 'btn-lang btn-en'}  onClick={() => langChange('EN')}>EN</button>
            <button className={lang === "RU" ? 'btn-lang--active btn-ru' : 'btn-lang btn-ru'} onClick={() => langChange('RU')}>RU</button>
        </div>
    );
}

export default LangButton;