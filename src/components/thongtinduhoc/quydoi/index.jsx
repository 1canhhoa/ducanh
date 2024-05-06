import Image from 'next/image'
import TableDiemGPA from '../components/TableDiemGPA'

export default function Quydoi({text, dataAcf}) {
  return (
    <main className='w-full'>
      <section className='w-full px-[11.56rem] pt-[8rem] pb-[5rem] xmd:px-[0.75rem] xmd:pt-[6rem]'>
        <div className='flex flex-col items-start mb-[1rem]'>
          <h1 className='title relative w-fit xmd:mb32 mb-[2rem] xmd:mb-[1rem]'>
            {text?.quydoiGPA?.title}
          </h1>
          {text.quydoiGPA?.description?.map((e, index) => (
            <span
              key={index}
              className='body16 font-semibold text-primary-50 mb-[0.5rem]'
            >
              {e}
            </span>
          ))}
        </div>
        <div className='flex flex-col items-start mb-[1.5rem]'>
          <h2 className='desktop32 text-secondary-50 font-bold mb-[0.5rem]'>
            {text?.quydoiGPA?.letter_and_number}
          </h2>
          <div
            className='tulamhoso'
            dangerouslySetInnerHTML={{__html: dataAcf?.label}}
          />
        </div>
        <div className='flex flex-col space-y-[1.5rem] w-full'>
          <div className='flex flex-col items-start'>
            <h2 className='desktop32 font-bold text-secondary-50'>
              {text?.quydoiGPA?.popular_GPA_scores?.title}
            </h2>
            <span className='text-[1rem] mt-[0.5rem] mb-[1.5rem] font-medium text-greyscaletext-60 leading-[1.5]'>
              {text?.quydoiGPA?.popular_GPA_scores?.description}
            </span>
            <div className='flex flex-col w-full'>
              {dataAcf?.diem_gpa_pho_bien?.map((e, index) => (
                <div
                  className='flex flex-col'
                  key={index}
                >
                  <span className='sub24 font-bold text-primary-50'>
                    {e?.title}
                  </span>
                  <p className='text-[1rem] mb-[1.5rem] font-medium leading-[1.7] text-greyscaletext-60'>
                    {e?.description}
                  </p>
                  {e?.table_diem_pho_bien &&
                    e?.table_diem_pho_bien?.map((e, index) => (
                      <div
                        className='flex flex-col items-start mb-[2.5rem] w-full'
                        key={index}
                      >
                        <span className='text-primary-50 text-[1rem] font-bold leading-[1.7]'>
                          {e?.title}
                        </span>
                        <span className='text-greyscaletext-60 font-medium text-[1rem] leading-[1.7] mb-[1rem]'>
                          {e?.label}
                        </span>
                        <TableDiemGPA
                          dataContent={e?.table_content}
                          dataTitle={e?.table_title}
                        />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <h2 className='desktop32 font-bold text-secondary-50 mb-[0.5rem]'>
              {text?.quydoiGPA?.gpa_in_Vietnam}
            </h2>
            {dataAcf?.table_diem_viet_nam &&
              dataAcf?.table_diem_viet_nam?.map((e, index) => (
                <div
                  className='flex flex-col items-start mb-[2.5rem] w-full'
                  key={index}
                >
                  <span className='text-primary-50 text-[1rem] font-bold leading-[1.7]'>
                    {e?.title}
                  </span>
                  <span className='text-greyscaletext-60 font-medium text-[1rem] leading-[1.7] mb-[1rem]'>
                    {e?.label}
                  </span>
                  <TableDiemGPA
                    dataContent={e?.table_content}
                    dataTitle={e?.table_title}
                  />
                </div>
              ))}
          </div>
          <div className='flex flex-col items-start'>
            <h2 className='desktop32 font-bold text-secondary-50 mb-[0.5rem]'>
              {text?.quydoiGPA?.gpa_Vietnam_to_international?.title}
            </h2>
            <span className='text-[1rem] mt-[0.5rem] mb-[1.5rem] font-medium text-greyscaletext-60 leading-[1.5]'>
              {text?.quydoiGPA?.gpa_Vietnam_to_international?.description}
            </span>
            <div className='flex flex-col space-y-[1.5rem] w-full'>
              {dataAcf?.quy_doi_vn_sang_quoc_te?.map((e, index) => (
                <div
                  className='flex flex-col'
                  key={index}
                >
                  <span className='sub24 font-bold text-primary-50'>
                    {e?.title}
                  </span>
                  <p className='text-[1rem] mb-[1.5rem] font-medium leading-[1.7] text-greyscaletext-60'>
                    {e?.description}
                  </p>
                  <Image
                    className='rounded-[0.75rem] mb-[1.75rem] w-full xmd:h-[11.62869rem]'
                    alt='Quy đổi thang điểm GPA tại mỹ'
                    src={e.image.url}
                    width={1223}
                    height={647.81}
                  />
                  {e?.table_diem_pho_bien &&
                    e?.table_diem_pho_bien?.map((e, index) => (
                      <div
                        className='flex flex-col items-start mb-[2.5rem]'
                        key={index}
                      >
                        <span className='text-primary-50 text-[1rem] font-bold leading-[1.7]'>
                          {e?.title}
                        </span>
                        <span className='text-greyscaletext-60 font-medium text-[1rem] leading-[1.7] mb-[1rem]'>
                          {e?.label}
                        </span>
                        <TableDiemGPA
                          dataContent={e?.table_content}
                          dataTitle={e?.table_title}
                        />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <h2 className='desktop32 font-bold text-secondary-50 mb-[1.5rem]'>
              {text?.quydoiGPA?.scholarships?.title}
            </h2>
            <p className='text-[1rem] mt-[0.5rem] font-medium text-greyscaletext-60 leading-[1.5]'>
              {text?.quydoiGPA?.scholarships?.description}
            </p>
            {dataAcf?.hoc_bong?.map((e, index) => (
              <div
                key={index}
                className='flex flex-col items-start mt-[1.5rem] '
              >
                <h5 className='sub24 font-bold text-primary-50'>{e.title}</h5>
                <p className='text-[1rem] font-medium leading-[1.7] text-greyscaletext-60'>
                  {e.description}
                </p>
              </div>
            ))}
            {text?.quydoiGPA?.scholarships?.note?.map((e, index) => (
              <span
                key={index}
                className='text-[1rem] my-[0.5rem] text-greyscaletext-60 font-medium leading-[1.7]'
              >
                {e}
              </span>
            ))}
          </div>
          <div className='flex flex-col items-start'>
            <h2 className='desktop32 font-bold text-secondary-50 mb-[1.5rem]'>
              Khi nộp hồ sơ qua công ty Đức Anh, chúng tôi sẽ giúp bạn xin mức
              học bổng cao nhất- trong điều kiện của bạn.
            </h2>
            {dataAcf?.thong_qua_duc_anh?.map((e, index) => (
              <div
                key={index}
                className='flex flex-col'
              >
                <h5 className='mb-[0.5] sub24 font-bold text-primary-50'>
                  {e.title}
                </h5>
                <div
                  className='tulamhoso'
                  dangerouslySetInnerHTML={{__html: e?.description}}
                />
              </div>
            ))}
          </div>
          <div className='flex flex-col items-start'>
            <h2 className='desktop32 font-bold text-secondary-50 mb-[1.5rem]'>
              {text?.quydoiGPA?.submitted_through_DucAnh}
            </h2>
            {dataAcf?.chi_tiet_thu_tuc?.map((e, index) => (
              <div
                key={index}
                className='flex flex-col'
              >
                <h5 className='mb-[0.5] sub24 font-bold text-primary-50'>
                  {e.title}
                </h5>
                <div
                  className='tulamhoso'
                  dangerouslySetInnerHTML={{__html: e?.description}}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
