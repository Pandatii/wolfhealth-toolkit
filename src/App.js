import React, { useState } from 'react';
import { Users, Target, FileText, Heart, Award, TrendingUp, DollarSign, Settings } from 'lucide-react';

const TabMenuApp = () => {
  const [activeTab, setActiveTab] = useState('wolfhealth');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when switching tabs manually
  const switchTab = (newTab) => {
    setActiveTab(newTab);
    setCurrentImageIndex(0);
  };

  const tabsData = {
    wolfhealth: {
      title: 'Wolfhealth',
      icon: <Users size={20} />,
      color: '#3b82f6',
      content: {
        title: 'Wolfhealth',
        subtitle: 'ทำไมสินเชื่อร้านยาถึงสำคัญ?',
        imageFiles: [
          '/wh1.png',
          '/wh2.png',
          '/wh3.png',
          '/wh4.png'
        ]
      }
    },
    hceco: {
      title: 'Know Your Customer',
      icon: <Users size={20} />,
      color: '#3b82f6',
      content: {
        title: 'โอกาสทางธุรกิจของร้านขายยา',
        subtitle: 'โอกาสทางธุรกิจของร้านขายยา',
        imageFiles: [
          '/hceco1.jpg',
          '/hceco2.jpg',
          '/hceco3.jpg',
          '/hceco4.jpg',
          '/hceco5.jpg',
          '/hceco6.jpg',
          '/hceco7.jpg',
          '/hceco8.jpg',
          '/hceco9.jpg',
          '/hceco10.jpg',
          '/hceco11.jpg'
        ]
      }
    },
    ktbhc: {
      title: 'Krungthai Healthcare Ecosystem',
      icon: <Users size={20} />,
      color: '#3b82f6',
      content: {
        title: 'Krungthai Healthcare Ecosystem',
        subtitle: 'Krungthai Healthcare Ecosystem',
        imageFiles: [
          '/ktbhc.jpg'
        ]
      }
    },
    dodonttips: {
      title: 'Do - Don\'t - Tips',
      icon: <Target size={20} />,
      color: '#ef4444',
      content: {
        title: 'เทคนิคการเจรจาพิชิตใจลูกค้า',
        subtitle: 'การระบุและวิเคราะห์ผู้มีอำนาจตัดสินใจ',
        imageFiles: [
          '/tips1.jpg',
          '/tips2.jpg',
          '/tips3.jpg',
          '/tips4.jpg',
          '/tips5.jpg',
          '/tips6.jpg',
          '/tips7.jpg',
          '/tips8.jpg',
          '/tips9.jpg',
          '/tips10.jpg',
          '/tips11.jpg',
          '/tips12.jpg'
        ]
      }
    },
    cal: {
      title: 'คำนวณดอกเบี้ยยอดซื้อ',
      icon: <Target size={20} />,
      color: '#ef4444',
      content: {
        title: 'คำนวณดอกเบี้ยยอดซื้อ',
        subtitle: 'คำนวณดอกเบี้ยยอดซื้อ Buyer OD, NHSO Supplier OD',
        imageFiles: [
          '/calc1.jpg',
          '/calc2.jpg',
          '/calc3.jpg',
          '/calc4.jpg',
          '/calc5.jpg',
          '/calc6.jpg',
          '/calc7.jpg',
          '/calcQR.jpg'
        ]
      }
    },
    documents: {
      title: 'Checklist เอกสาร',
      icon: <Heart size={20} />,
      color: '#10b981',
      content: {
        title: 'Healthcare Ecosystem Overview',
        subtitle: 'ระบบนิเวศด้านสุขภาพและการดูแลพนักงาน',
        imageFiles: [
          '/checklist.jpg'
        ]
      }
    },
    campaign: {
      title: 'Campaign กระตุ้นยอดขาย',
      icon: <TrendingUp size={20} />,
      color: '#8b5cf6',
      content: {
        title: 'Campaign กระตุ้นยอดขาย',
        subtitle: 'Campaign กระตุ้นยอดขาย ถึงธันวา 2568',
        imageFiles: [
          '/camp1.jpg',
          '/camp2.jpg',
          '/camp3.jpg',
          '/camp4.jpg',
          '/camp5.jpg'
        ]
      }
    },
    
  };

  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #fef3c7 100%)',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
    },
    header: {
      background: 'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    },
    headerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    headerTop: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 0',
      borderBottom: '1px solid #e5e7eb',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#111827',
      margin: 0,
    },
    subtitle: {
      color: '#6b7280',
      marginTop: '4px',
      fontSize: '14px',
    },
    statusBadge: {
      display: 'flex',
      alignItems: 'center',
      background: '#dcfce7',
      color: '#166534',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '14px',
    },
    statusDot: {
      width: '8px',
      height: '8px',
      background: '#22c55e',
      borderRadius: '50%',
      marginRight: '8px',
    },
    tabsContainer: {
      display: 'flex',
      overflowX: 'auto',
      borderBottom: '1px solid #e5e7eb',
    },
    tab: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px 24px',
      cursor: 'pointer',
      borderBottom: '2px solid transparent',
      transition: 'all 0.2s',
      whiteSpace: 'nowrap',
      color: '#6b7280',
      fontSize: '14px',
      fontWeight: '500',
    },
    tabActive: {
      color: '#3b82f6',
      borderBottomColor: '#3b82f6',
      background: '#f8fafc',
    },
    tabIcon: {
      marginRight: '8px',
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 20px',
    },
    contentHeader: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    contentTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '8px',
    },
    contentSubtitle: {
      fontSize: '16px',
      color: '#6b7280',
    },
    section: {
      background: 'white',
      borderRadius: '12px',
      padding: '32px',
      marginBottom: '24px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
    },
    sectionIcon: {
      marginRight: '12px',
      padding: '8px',
      background: '#dbeafe',
      borderRadius: '8px',
    },
    itemList: {
      display: 'grid',
      gap: '12px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      background: '#f9fafb',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
    },
    itemDot: {
      width: '8px',
      height: '8px',
      background: '#3b82f6',
      borderRadius: '50%',
      marginRight: '12px',
    },
    // Carousel Styles
    carousel: {
      position: 'relative',
      marginTop: '24px',
      background: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    carouselContainer: {
      position: 'relative',
      width: '100%',
      minHeight: '300px',
      maxHeight: '600px',
      overflow: 'hidden',
    },
    carouselTrack: {
      display: 'flex',
      width: '100%',
      transition: 'transform 0.3s ease-in-out',
    },
    carouselSlide: {
      minWidth: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f9fafb',
      padding: '20px',
    },
    carouselImage: {
      maxWidth: '100%',
      maxHeight: '450px',
      width: 'auto',
      height: 'auto',
      objectFit: 'contain',
      display: 'block',
    },
    carouselCaption: {
      marginTop: '16px',
      color: '#374151',
      padding: '12px 20px',
      fontSize: '16px',
      fontWeight: '500',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '8px',
      width: '100%',
      maxWidth: '600px',
    },
    carouselNav: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '20px',
      color: '#374151',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.2s',
      zIndex: 10,
    },
    navPrev: {
      left: '20px',
    },
    navNext: {
      right: '20px',
    },
    carouselDots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      padding: '20px',
      background: 'rgba(0, 0, 0, 0.05)',
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      background: '#d1d5db',
    },
    dotActive: {
      background: '#3b82f6',
      transform: 'scale(1.2)',
    },
    imageCard: {
      background: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    imageCaption: {
      padding: '16px',
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '14px',
    },
    metricsGrid: {
      display: 'grid',
      gap: '20px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      marginTop: '24px',
    },
    metricCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    metricValue: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '4px',
    },
    metricLabel: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '8px',
    },
    metricChange: {
      fontSize: '12px',
      fontWeight: '500',
      padding: '2px 8px',
      borderRadius: '12px',
    },
    toolsGrid: {
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      marginTop: '24px',
    },
    toolCard: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s',
    },
    toolInfo: {
      flex: 1,
    },
    toolName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '4px',
    },
    toolDescription: {
      fontSize: '14px',
      color: '#6b7280',
    },
    toolStatus: {
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '500',
      marginLeft: '16px',
    },
    statusActive: {
      background: '#dcfce7',
      color: '#166534',
    },
    statusMaintenance: {
      background: '#fef3c7',
      color: '#92400e',
    },
    footer: {
      background: 'white',
      borderTop: '1px solid #e5e7eb',
      marginTop: '64px',
    },
    footerContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '32px 16px',
      textAlign: 'center',
      color: '#6b7280',
    },
  };

  const renderContent = () => {
    const data = tabsData[activeTab];
    const content = data.content;

    const nextImage = () => {
      if (content.imageFiles) {
        setCurrentImageIndex((prev) => 
          prev === content.imageFiles.length - 1 ? 0 : prev + 1
        );
      }
    };

    const prevImage = () => {
      if (content.imageFiles) {
        setCurrentImageIndex((prev) => 
          prev === 0 ? content.imageFiles.length - 1 : prev - 1
        );
      }
    };

    const goToImage = (index) => {
      setCurrentImageIndex(index);
    };

    return (
      <div style={styles.content}>
        <div style={styles.contentHeader}>
          <h1 style={styles.contentTitle}>{content.title}</h1>
          <p style={styles.contentSubtitle}>{content.subtitle}</p>
        </div>

        {/* Image Carousel */}
        {content.imageFiles && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <div style={{...styles.sectionIcon, background: data.color + '20'}}>
                <div style={{color: data.color}}>
                  {data.icon}
                </div>
              </div>
              รูปภาพประกอบ
            </h2>
            <div style={styles.carousel}>
              <div style={styles.carouselContainer}>
                <div 
                  style={{
                    ...styles.carouselTrack,
                    transform: `translateX(-${currentImageIndex * 100}%)`
                  }}
                >
                  {content.imageFiles.map((imageSrc, index) => (
                    <div key={index} style={styles.carouselSlide}>
                      <img 
                        src={imageSrc}
                        alt={`${content.title} - รูปที่ ${index + 1}`}
                        style={styles.carouselImage}
                      />
                      <div style={styles.carouselCaption}>
                        รูปที่ {index + 1}: {content.title}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Navigation Buttons */}
                {content.imageFiles.length > 1 && (
                  <>
                    <button 
                      style={{...styles.carouselNav, ...styles.navPrev}}
                      onClick={prevImage}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'white';
                        e.target.style.transform = 'translateY(-50%) scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                        e.target.style.transform = 'translateY(-50%) scale(1)';
                      }}
                    >
                      ←
                    </button>
                    <button 
                      style={{...styles.carouselNav, ...styles.navNext}}
                      onClick={nextImage}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'white';
                        e.target.style.transform = 'translateY(-50%) scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                        e.target.style.transform = 'translateY(-50%) scale(1)';
                      }}
                    >
                      →
                    </button>
                  </>
                )}
              </div>
              
              {/* Dots Navigation */}
              {content.imageFiles.length > 1 && (
                <div style={styles.carouselDots}>
                  {content.imageFiles.map((_, index) => (
                    <button
                      key={index}
                      style={{
                        ...styles.dot,
                        ...(index === currentImageIndex ? styles.dotActive : {}),
                        background: index === currentImageIndex ? data.color : '#d1d5db'
                      }}
                      onClick={() => goToImage(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sections */}
        {content.sections && content.sections.map((section, index) => (
          <div key={index} style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <div style={{...styles.sectionIcon, background: data.color + '20'}}>
                <div style={{color: data.color}}>
                  {data.icon}
                </div>
              </div>
              {section.title}
            </h2>
            <div style={styles.itemList}>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} style={styles.listItem}>
                  <div style={{...styles.itemDot, background: data.color}}></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Metrics */}
        {content.metrics && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <div style={{...styles.sectionIcon, background: data.color + '20'}}>
                <div style={{color: data.color}}>
                  {data.icon}
                </div>
              </div>
              ตัวชี้วัดผลการดำเนินงาน
            </h2>
            <div style={styles.metricsGrid}>
              {content.metrics.map((metric, index) => (
                <div key={index} style={styles.metricCard}>
                  <div style={{...styles.metricValue, color: metric.color}}>
                    {metric.value}
                  </div>
                  <div style={styles.metricLabel}>{metric.label}</div>
                  <span style={{
                    ...styles.metricChange,
                    background: metric.change.startsWith('+') ? '#dcfce7' : '#fee2e2',
                    color: metric.change.startsWith('+') ? '#166534' : '#dc2626'
                  }}>
                    {metric.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools */}
        {content.tools && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <div style={{...styles.sectionIcon, background: data.color + '20'}}>
                <div style={{color: data.color}}>
                  {data.icon}
                </div>
              </div>
              เครื่องมือที่มีให้บริการ
            </h2>
            <div style={styles.toolsGrid}>
              {content.tools.map((tool, index) => (
                <div key={index} style={styles.toolCard}>
                  <div style={styles.toolInfo}>
                    <div style={styles.toolName}>{tool.name}</div>
                    <div style={styles.toolDescription}>{tool.description}</div>
                  </div>
                  <span style={{
                    ...styles.toolStatus,
                    ...(tool.status === 'active' ? styles.statusActive : styles.statusMaintenance)
                  }}>
                    {tool.status === 'active' ? 'พร้อมใช้งาน' : 'ปรับปรุง'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.headerTop}>
            <div>
              <h1 style={styles.title}>Wolf Hero Toolkit</h1>
              <p style={styles.subtitle}>เครื่องมือสำหรับทีมขาย Wolf Hero</p>
            </div>
            <div style={styles.statusBadge}>
              <div style={styles.statusDot}></div>
              พร้อมใช้งาน
            </div>
          </div>

          {/* Tabs */}
          <div style={styles.tabsContainer}>
            {Object.entries(tabsData).map(([key, tab]) => (
              <div
                key={key}
                style={{
                  ...styles.tab,
                  ...(activeTab === key ? styles.tabActive : {}),
                  ...(activeTab === key ? { color: tab.color, borderBottomColor: tab.color } : {})
                }}
                onClick={() => switchTab(key)}
              >
                <div style={styles.tabIcon}>
                  {tab.icon}
                </div>
                {tab.title}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      {renderContent()}

          {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <p>&copy; 2025 Wolf Hero Toolkit. กระบี่พิชิตเป้าหมาย</p>
        </div>
      </footer>
    </div>

    
  );
};

export default TabMenuApp;